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

program.parse(process.argv);
