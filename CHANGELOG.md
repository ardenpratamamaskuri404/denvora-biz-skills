# Changelog

All notable changes to this project will be documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-11-15

Official General Availability (GA) public release of `denvora-biz-skills` featuring all 5 complete digital business skills for AI agents.

### Added
- **`client-brief` (v1.0.0):**
  - Turns unstructured client chats, transcripts, and emails into structured project briefs.
  - Added prompt injection detection and untrusted data isolation.
  - Standardized bilingual safety note and placeholder convention (`[ISI: ...]` / `[FILL IN: ...]`).
- **`quote-builder` (v1.0.0):**
  - Itemized proposal generation strictly derived from user-provided rates and hours.
  - Zero-invented-pricing hard gate.
  - Added currency formatting guidance and explicit arithmetic verification line.
  - Added scope exclusion boundaries and formal change-request rules.
- **`launch-checklist` (v1.0.0):**
  - Tailored pre-launch checklist covering Blockers, Should, and Nice-to-have items.
  - Added explicit Unconfirmed Items section to reject unverified claims.
  - Clear boundaries against unauthorized legal/tax certification.
- **`handover` (v1.0.0):**
  - Project handover documentation covering deliverables checklist, live URLs, repository transfer, and database dumps.
  - Credential and account ownership transfer protocol without plaintext secret exposure.
  - Clear warranty and bugfix window terms with formal client acceptance sign-off.
- **`product-page` (v1.0.0):**
  - Digital product copywriting and page architecture for SaaS, templates, and digital downloads.
  - Problem-benefit mapping, technical prerequisites, anti-personas, and transparent refund terms.
  - Hard gate against invented testimonials, fake reviews, or fabricated user statistics.
- **Tooling, Packaging & CI:**
  - Automated GitHub Actions workflow `.github/workflows/validate-skills.yml` for frontmatter, line limit, and secret checking.
  - Cross-platform packaging utilities (`scripts/package-skills.ps1` and `scripts/package-skills.js`) with POSIX zip normalization.
  - Full pre-release audit and link checker suite `scripts/verify-all.js`.
  - Skill metadata and line limit validator `scripts/validate-skills.js`.
- **Visual Assets & Documentation:**
  - Official brand logo (`assets/denvora-biz-skills-logo.png`).
  - Activity diagram for project lifecycle (`assets/workflow-lifecycle.png`).
  - Activity diagram for safety guardrails and three pillars (`assets/workflow-principles.png`).
  - Bento Card product overview showcase (`assets/product-overview.png`).
  - Complete, self-contained bilingual documentation (English & Bahasa Indonesia) in `README.md`.
  - Standalone rules for coding agents in `AGENTS.md` and contributor guide in `CONTRIBUTING.md`.
