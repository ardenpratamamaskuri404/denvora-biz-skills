# MAINTENANCE.md

Skills are plain text, so upkeep is light. Keep it that way.

## 1. What needs care

| Area | Why | Frequency |
|---|---|---|
| Install commands and paths | Tools change how they read skills | Before each release; when users report issues |
| Skill behavior | Models change; outputs drift | Re-run tests each release and when models update |
| Issues and PRs | Community input | Weekly check (or the cadence stated in the README) |
| Legal-adjacent wording | Rules and norms change | Review at least yearly with a professional |
| Competing skills | Ecosystem moves fast | Quick scan before each release |

## 2. Support policy (state in README)

- Status label: **v1.0.0 (Official Release)**.
- Typical response time to issues: 48 business hours SLA.
- Not supported: legal/tax certifications, custom skills for individual private projects.
- Maintainer: Arden Pratama Maskuri.

## 3. Triage

- Labels: `bug`, `weak-result`, `new-skill`, `docs`, `question`, `good-first-issue`.
- Weak-result reports become test cases in `TESTING-EVAL.md` and `docs/tests/`.
- Close stale questions politely after asking for details.

## 4. Automation

- Cross-platform CI matrix (`.github/workflows/validate-skills.yml`) on Ubuntu, Windows, and macOS.
- Validates frontmatter (`name`, `version`, `description`), semver format, line-count limits (<250 lines), secret leaks, and placeholder integrity.
- Full verification suite (`scripts/verify-all.js`) checking relative links, referenced files, and `.skill` zip integrity.

## 5. Keeping scope focused

- Add a new skill only when it meets a real, repeated business need and you can test it thoroughly.
- Prefer improving the five core skills (`client-brief`, `quote-builder`, `launch-checklist`, `handover`, `product-page`) over adding many shallow ones.
- Park risky topics (contracts, tax) unless reviewed by a professional.

## 6. If you can't maintain it

- Switch the README status to maintenance mode.
- Invite a co-maintainer from active contributors.
- As a last resort, archive the repo with an honest note.
