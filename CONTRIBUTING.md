# Contributing to denvora-biz-skills

Thank you for your interest in improving `denvora-biz-skills`. We welcome feedback, edge-case prompts, bug reports, and pull requests from freelancers, builders, and agency owners.

All contributors are expected to uphold our [Code of Conduct](CODE_OF_CONDUCT.md).

---

## How to Report an Issue or Weak AI Result

The most valuable contribution is **a real-world situation where a skill generated a weak, incorrect, or hallucinated response**.

When reporting an issue, please include:
1. **Target Skill:** Specify which skill was triggered (`client-brief`, `quote-builder`, `launch-checklist`, `handover`, or `product-page`).
2. **Input Prompt:** The prompt you provided (ensure you anonymize client names, credentials, and sensitive commercial data).
3. **AI Output:** What the agent produced.
4. **Expected Behavior:** What the agent should have done instead according to professional standards.
5. **Environment:** The model and tool used (e.g., Claude Code, Cursor, Antigravity, ChatGPT).

---

## Proposing Changes (Pull Requests)

1. **Fork & Branch:** Create a dedicated branch for your feature or bug fix from `main`.
2. **Review Architecture Rules:** Read [`AGENTS.md`](AGENTS.md) thoroughly before making any structural changes.
3. **Keep `SKILL.md` Concise:** Target under 250 lines per `SKILL.md`. Detailed templates and question banks belong in `references/`.
4. **Run Verification:** Ensure all automated checks pass locally before opening a pull request:
   ```bash
   node scripts/validate-skills.js
   node scripts/verify-all.js
   ```
5. **Update Documentation:** If your change modifies skill behavior or flags, update [`README.md`](README.md) and [`CHANGELOG.md`](CHANGELOG.md).
6. **Submit PR:** Open a pull request against `main` describing your rationale, test evidence, and verification output.

---

## Contribution Rules

- **Zero-Invented Pricing:** Never add real or invented market prices, tax rates, or legal figures to skill rules. Always use marked placeholders (`[FILL IN: ...]` or `[ISI: ...]`).
- **Draft Status Only:** Any output touching contracts, taxes, or compliance must explicitly state that it is a working draft for professional review.
- **Privacy & Anonymization:** Never include proprietary client data or real personal credentials in example files or test cases.
- **Tone & Collaboration:** Be respectful and constructive in code reviews and discussions.

---

## Proposing New Skills

Have an idea for a new freelance business skill? Open a feature request issue covering:
- **Target Persona:** Who needs this skill (e.g., solo SaaS builder, retainered agency)?
- **Problem Statement:** What pain point does it address?
- **Example Flow:** Sample client input and desired structured output.
- **Safety Boundaries:** What the skill must explicitly refuse to do.
