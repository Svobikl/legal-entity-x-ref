# LEX: Legal-Entity-X-ref — Project Constitution

## The 5 Discovery Questions

1. **North Star:** What is the singular desired outcome?
   To create "Legal-Entity-X-ref" (LEX), a centralized, agent-ready truth engine providing legal context, official government references, and contract templates across 29 jurisdictions (US, Canada, and 27 EU members).

2. **Integrations:** Which external services? Are keys ready?
   Deep web search to find and link *only* official government references (e.g., SEC, EUR-Lex, Justice Canada). No API keys required, just search parameters.

3. **Source of Truth:** Where does primary data live?
   Verified official government websites and legislation portals. No forums, blogs, or unofficial summaries.

4. **Delivery Payload:** How/where should the final result be delivered?
   Agent-consumable templates (markdown/YAML) detailing 5 categories of contracts:
   - Business Foundation & Governance
   - Employment & Workforce
   - Sales & Commercial Transactions
   - Real Estate & Facilities
   - Intellectual Property (IP)

5. **Behavioral Rules:** How should the system "act"?
   Deterministic, precise, and strictly factual. Must provide correct metadata for USA vs. EU nuanced differences without hallucinatory or anecdotal legal advice.

## Architectural Invariants
- **Layer 1 (architecture/):** Technical SOPs in Markdown, including the contract templates explicitly formatted for agent consumption.
- **Layer 2 (Navigation):** Reasoning/routing layer built akin to the `context-hub` model, allowing agents to query templates and references.
- **Layer 3 (tools/):** Deterministic scripts if dynamic searching or validation of official links is built in the future.
