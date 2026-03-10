# LEX: Legal-Entity-X-ref — Agent Skill (SKILL.md)

## Purpose
Agents use the LEX skill to retrieve deterministic legal context, jurisdictional comparisons (US/EU/CA), and verified government references. This skill prevents legal hallucinations by grounding the agent in actual government-published legislation and templates.

## Usage Protocol

### 1. Identify Jurisdiction
Before drafting, the agent MUST determine if the user is in the USA, Canada, or the EU.

### 2. Search & Fetch Context
Use the `lex` shortcut to find the relevant template.
Example: `lex get templates/02_employment_workforce.md`

### 3. Verify Authority
Always include a "Verified Sources" section in your output citing the official links retrieved via `lex verify`.

## Tool Access
- **Search**: `lex search <query>` (Finds templates by keywords).
- **Get**: `lex get <path>` (Reads the detailed template).
- **Verify**: `lex verify` (Fetches the official government source directory).

## Design Constraints
- **NO Guessing**: If a jurisdiction is not in the metadata table, state that it is currently outside the LEX "Truth Engine" scope.
- **NO Anecdotal Advice**: Only use findings from `findings.md` or official government domains.
- **Structural Comparison**: Always present the USA vs EU vs CA context table when applicable to highlight restrictive covenants or notice period differences.
