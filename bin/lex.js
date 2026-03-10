#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { Command } = require('commander');
const chalk = require('chalk');

const program = new Command();
const LEX_DIR = path.join(__dirname, '..');
const TEMPLATES_DIR = path.join(LEX_DIR, 'templates');

program
  .name('lex')
  .description('Legal-Entity-X-ref CLI - Truth Engine for Global Legal Context')
  .version('1.0.0');

program
  .command('search')
  .description('Search across jurisdictional templates')
  .argument('[pattern]', 'Pattern to search for')
  .action((pattern) => {
    console.log(chalk.cyan('--- LEX Search Results ---'));
    const files = fs.readdirSync(TEMPLATES_DIR).filter(f => f.endsWith('.md'));
    
    if (!pattern) {
      files.forEach(file => {
        const content = fs.readFileSync(path.join(TEMPLATES_DIR, file), 'utf8');
        const nameMatch = content.match(/name: (.*)/);
        const name = nameMatch ? nameMatch[1] : file;
        console.log(`${chalk.bold(file)}: ${name}`);
      });
    } else {
      let found = false;
      files.forEach(file => {
        const filePath = path.join(TEMPLATES_DIR, file);
        const lines = fs.readFileSync(filePath, 'utf8').split('\n');
        lines.forEach((line, index) => {
          if (line.toLowerCase().includes(pattern.toLowerCase())) {
            console.log(`${chalk.yellow(file)}:${index + 1} - ${line.trim()}`);
            found = true;
          }
        });
      });
      if (!found) console.log(chalk.red('No matches found.'));
    }
  });

program
  .command('get')
  .description('Retrieve specific template or document')
  .argument('<path>', 'Path to the file relative to LEX root')
  .action((targetPath) => {
    const filePath = path.join(LEX_DIR, targetPath);
    if (fs.existsSync(filePath)) {
      console.log(fs.readFileSync(filePath, 'utf8'));
    } else {
      console.log(chalk.red(`File ${targetPath} not found in LEX directory.`));
    }
  });

program
  .command('verify')
  .description('List all verified government references')
  .action(() => {
    console.log(chalk.green('--- LEX Verified References ---'));
    const findingsPath = path.join(LEX_DIR, 'findings.md');
    if (fs.existsSync(findingsPath)) {
      const content = fs.readFileSync(findingsPath, 'utf8');
      const links = content.split('\n').filter(line => line.includes('http'));
      links.forEach(link => console.log(link.trim()));
    }
  });

program
  .command('list-eu')
  .description('List official databases for all 27 EU nations')
  .action(() => {
    console.log(chalk.blue('--- LEX EU 27 Member State Databases ---'));
    const findingsPath = path.join(LEX_DIR, 'findings.md');
    if (fs.existsSync(findingsPath)) {
      const content = fs.readFileSync(findingsPath, 'utf8');
      const lines = content.split('\n');
      let start = false;
      lines.forEach(line => {
        if (line.includes('Individual EU Member State Databases')) {
          start = true;
          return;
        }
        if (start && line.includes('|')) {
          console.log(line.trim());
        }
      });
    }
  });

program
  .command('draft')
  .description('Scaffold a new contract draft from a template')
  .argument('<template>', 'Name of the template file (e.g., 01_business_foundation.md)')
  .argument('[output]', 'Optional output filename')
  .action((template, output) => {
    const templatePath = path.join(TEMPLATES_DIR, template);
    if (!fs.existsSync(templatePath)) {
      console.log(chalk.red(`Template ${template} not found.`));
      return;
    }

    const draftsDir = path.join(process.cwd(), 'drafts');
    if (!fs.existsSync(draftsDir)) {
      fs.mkdirSync(draftsDir);
    }

    const outputName = output || `draft_${template}`;
    const outputPath = path.join(draftsDir, outputName);
    
    const disclaimer = `# LEX AI Generated Draft\n# This document was generated using LEX (Legal-Entity-X-ref) as a reference.\n# It is a work in progress and should be used with caution.\n# It is not a substitute for professional legal advice.\n\n`;
    const templateContent = fs.readFileSync(templatePath, 'utf8');
    
    fs.writeFileSync(outputPath, disclaimer + templateContent);
    console.log(chalk.green(`Successfully drafted: ${chalk.bold(path.join('drafts', outputName))}`));
  });

program.parse(process.argv);
