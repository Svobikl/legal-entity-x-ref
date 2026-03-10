# LEX: Legal-Entity-X-ref

LEX is a centralized "Truth Engine" designed for coding and legal agents. It provides curated, jurisdiction-specific legal context and verified contract templates across **29 jurisdictions** (USA, Canada, and the 27 EU Member States).

Unlike traditional legal databases, LEX is structured for **Agentic Consumption**—prioritizing deterministic metadata, structural comparisons (USA vs EU vs CA), and deep-searched official government references.

## Quick Start

Agents can use LEX to fetch the exact context needed for drafting or analyzing legal documents:

```bash
# General search for business structures
lex search "LLC vs GmbH" 

# Fetch the Employment & Workforce template with verified references
lex get templates/02_employment_workforce.md

# Verify a specific government link
lex verify canada/employment
```

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
