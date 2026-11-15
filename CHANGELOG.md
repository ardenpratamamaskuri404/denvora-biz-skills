# Changelog

All notable changes to this project will be documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2026-11-15

First public beta release of `denvora-biz-skills`.

### Added
- **`client-brief` (v0.1.0):**
  - Turns unstructured client chats, transcripts, and emails into structured project briefs.
  - Added prompt injection detection and untrusted data isolation.
  - Standardized bilingual safety note and placeholder convention (`[ISI: ...]` / `[FILL IN: ...]`).
- **`quote-builder` (v0.1.0):**
  - Itemized proposal generation strictly derived from user-provided rates and hours.
  - Zero-invented-pricing hard gate.
  - Added currency formatting guidance and explicit arithmetic verification line.
  - Added scope exclusion boundaries and formal change-request rules.
- **`launch-checklist` (v0.1.0):**
  - Tailored pre-launch checklist covering Blockers, Should, and Nice-to-have items.
  - Added explicit Unconfirmed Items section to reject unverified claims.
  - Clear boundaries against unauthorized legal/tax certification.
- **Tooling, Packaging & CI:**
  - Added GitHub Actions workflow `.github/workflows/validate-skills.yml` for automated frontmatter, line limit, and secret checking.
  - Added validation script `scripts/validate-skills.js` and `.skill` zip packaging utilities (`scripts/package-skills.ps1` and `scripts/package-skills.js`).
  - Added full repository verification and link checking suite `scripts/verify-all.js`.
- **Visual Assets & Documentation:**
  - Added brand logo (`assets/denvora-biz-skills-logo.png`).
  - Added Workflow Lifecycle activity diagram (`assets/workflow-lifecycle.png`).
  - Added Safety Guardrail activity diagram (`assets/workflow-principles.png`).
  - Added Bento-style Product Overview showcase (`assets/product-overview.png`).
  - Added comprehensive bilingual documentation (English & Bahasa Indonesia) in `README.md`.
  - Added agent developer instructions in `AGENTS.md` and contributor guidelines in `CONTRIBUTING.md`.

