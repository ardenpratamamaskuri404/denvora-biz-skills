# AUDIT.md — baseline review (2026-11-15)

Point-in-time review of the repo before any release work. The repo has solid content (3 skills, 9 docs, PR/issue templates) but **no evidence that the skills work**: no test runs, no compatibility results, no packaging, and it is not yet a git repository.

Fix order and checkable tasks live in `ROADMAP.md`. This file records *what is wrong and why it matters*.

Legend: **P0** blocker · **P1** before beta · **P2** quality/polish.

## Findings

| ID | Sev | Where | Finding | Why it matters | Fix |
|---|---|---|---|---|---|
| A-01 | P0 | repo root | Not a git repository (`.git` missing) | No history, no review, no release possible | `git init`, `.gitignore`, first commit |
| A-02 | P0 | `README.md:39,42`; `docs/DISTRIBUTION.md:11-13` | `USERNAME` placeholders still present | Install commands cannot work | Replace after deciding namespace |
| A-03 | P0 | `docs/TESTING-EVAL.md:81` | Results log empty | Repo's own rules require recorded tests | Run tests, record every run |
| A-04 | P0 | `docs/TESTING-EVAL.md` §2–3 | Only test IDs (`CB-1…6`, `QB-1…7`, `LC-1…6`); no prompt text, no 8–10 should/should-not trigger sets | Tests cannot be executed or repeated | Create `docs/tests/<skill>.md` prompt packs |
| A-05 | P0 | `docs/TESTING-EVAL.md:68` | "Zero invented numbers" hard gate never exercised | The main safety promise is unverified | Boundary tests + hard-gate check |
| A-06 | P0 | `.github/` | No CI workflow | Frontmatter/line-count/secrets drift goes unnoticed | Add `validate-skills.yml` (per `MAINTENANCE.md` §4) |
| A-07 | P1 | `README.md` | No support/status section | `MAINTENANCE.md:15` says to state it | Add Beta status, response time, non-support |
| A-08 | P1 | `docs/TESTING-EVAL.md:85-89` | Compatibility table empty | Cannot claim any tool is supported | Test and fill real versions |
| A-09 | P1 | `docs/DISTRIBUTION.md:19-21` | No `.skill` packaging step/artifact | Claude upload/release path untested | Build and test one package |
| A-10 | P1 | `CHANGELOG.md` | Only "Unreleased"; no version/date | Release history missing | Add version + date + per-skill notes |
| A-11 | P1 | `SECURITY.md:21` | Self-instruction left in policy ("State here…") | Policy looks unfinished | Set a real response time |
| A-12 | P2 | `skills/launch-checklist/SKILL.md` | Rule 3 requires "unconfirmed" items; output format has no such section | Rule not reflected in output | Add explicit Unconfirmed section |
| A-13 | P2 | `skills/client-brief/SKILL.md` | Injection rule exists, but no process step for handling detected injection | Inconsistent behavior | Add a handling step |
| A-14 | P2 | `skills/quote-builder/SKILL.md` | No currency/rounding guidance or arithmetic re-check example | Money output risk | Add formatting + verification rule |
| A-15 | P2 | all skills | Placeholder/safety-note wording duplicated, may drift | Inconsistent output | Shared reference or exact duplication |
| A-16 | P2 | `README.md:23-25` vs skill frontmatter | README says `v0.1`; frontmatter has no `version:` | Version mismatch | Add `version:` or drop the claim |

## Missing artifacts (not bugs, just absent)

- `docs/tests/` prompt packs (see A-04)
- `.github/workflows/validate-skills.yml` (A-06)
- `.gitignore`
- Release `.skill` packages
- Filled example outputs (one per skill) for docs

## What is already good

- Clear honesty/legal boundaries (`docs/LEGAL-SAFETY.md`) and consistent "draft, not advice" notes.
- `SKILL.md` files are short (46–58 lines) and use `references/` well.
- Trigger descriptions are specific and bilingual (ID/EN).
- PR/issue templates and definition of done already exist.

## Cannot be fixed by an AI

- Professional review of legal-adjacent wording (`ROADMAP.md` P3).
- Real beta feedback from 5–10 freelancers (`ROADMAP.md` P3).
