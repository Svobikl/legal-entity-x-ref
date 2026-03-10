# LEX: Legal-Entity-X-ref

LEX is a centralized "Truth Engine" designed for coding and legal agents. It provides curated, jurisdiction-specific legal context and verified contract templates across **29 jurisdictions** (USA, Canada, and the 27 EU Member States).

Unlike traditional legal databases, LEX is structured for **Agentic Consumption**—prioritizing deterministic metadata, structural comparisons (USA vs EU vs CA), and deep-searched official government references.

## Quick Start

### Installation
You can install LEX globally directly from GitHub:

```bash
npm install -g https://github.com/Svobikl/legal-entity-x-ref.git
```

Or clone and link locally:
```bash
git clone https://github.com/Svobikl/legal-entity-x-ref.git
cd legal-entity-x-ref
npm install
npm link
```

### Basic Commands
Once installed, use the `lex` command:

- `lex search [pattern]` - Search for legal concepts (e.g., `lex search "non-compete"`)
- `lex get [path]` - Read a specific template (e.g., `lex get templates/02_employment_workforce.md`)
- `lex verify` - List official government reference links
- `lex list-eu` - Quick view of all 27 EU national legal databases
- `lex help` - Show all commands

## How It Works

LEX operates as a **Contextual Shortcut**. Instead of agents searching the messy web, they query LEX for high-fidelity "Jurisdictional Nuance Tables."

1. **Query**: Agent identifies a legal need (e.g., "Draft a Non-Compete for a German worker").
2. **Fetch**: Agent calls `lex get 02_employment_workforce`.
3. **Analyze**: Agent reads the **EU Context** column (noting mandatory Garden Leave/compensation rules).
4. **Draft**: Agent produces a legally sound draft citing official government links (e.g., EUR-Lex).

## Content Structure

| Category | File Path | Focus Area |
|----------|-----------|------------|
| Business Foundation | `templates/01_business_foundation.md` | Governance, AoA, Shareholder Agreements. |
| Employment | `templates/02_employment_workforce.md` | Hiring, Contractors, Non-Competes, Work-at-Will. |
| Sales & Commercial | `templates/03_sales_commercial.md` | MSA, SOW, Privacy (GDPR/CCPA), ToS. |
| Real Estate | `templates/04_real_estate.md` | Leases, Licenses, Resident Tenancy. |
| Intellectual Property| `templates/05_intellectual_property.md` | IP Assignment, Licensing, Moral Rights. |

## The "Truth Engine" Protocol

LEX strictly adheres to three pillars:
- **Zero Hallucination**: Only official government domains (`*.gov`, `*.gc.ca`, `*.europa.eu`) are cited.
- **Jurisdictional Comparison**: Every template explicitly maps differences between US, EU, and CA commonalities.
- **Metadata-First**: Templates include YAML frontmatter for programmatic filtering.

## Self-Improving Agents

Just like `context-hub`, LEX supports:
- **Annotations**: Agents can append verified local case law or specific state-level findings back into `findings.md`.
- **Reference Updates**: As laws change (e.g., New FTC rulings on Non-Competes), high-priority updates are pushed to the `findings.md` and templates.

## Contributing

Anyone can contribute to LEX to improve the "Truth Engine"—legal practitioners, developers, and jurisdictional experts are all welcome.

- **Add Templates**: Follow the structural comparisons (USA vs EU vs CA) and metadata-first approach.
- **Update References**: Help keep official government links up to date as legislation changes.
- **Annotate**: Share local nuances and case law findings.

Content is maintained as plain markdown with YAML frontmatter. Submit your improvements as pull requests to the main repository.

## License

LEX is released under the [MIT License](LICENSE). 

---
*Disclaimer: LEX provides structural and contextual legal data for agentic automation. It is not professional legal advice.*
