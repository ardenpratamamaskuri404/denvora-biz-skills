# ROADMAP.md

Quality over quantity. Finish and verify each phase before the next. Tick boxes as you go.

Baseline audit: 2026-11-15. Repo is **not a git repository yet**; docs and three skills exist, but no test, compatibility, or packaging evidence exists. Phase 1 is the critical path: the repo's own rules (AGENTS.md, TESTING-EVAL.md) cannot be satisfied without recorded tests. Finding IDs below (`A-01`…) are in `docs/AUDIT.md`.

Legend: **P0** = blocker for any release · **P1** = needed before beta · **P2** = quality/polish · **P3** = beta & release · **P4** = later.

---

## P0 — Make it real and verifiable (blocker)

- [ ] **A-01** Init git (`git init`), add `.gitignore` (OS junk, editor files, `.skill` build output), first commit
- [ ] **A-02** Decide repo name/namespace and replace `USERNAME` in `README.md` (lines 39, 42) and `docs/DISTRIBUTION.md` (lines 11–13)
- [ ] **A-04** Create the actual test prompt pack, one file per skill: `docs/tests/client-brief.md`, `docs/tests/quote-builder.md`, `docs/tests/launch-checklist.md` with **8–10 should-trigger + 8–10 should-not-trigger** prompts (ID + EN, casual + formal) and the full prompt text for CB-1…CB-6, QB-1…QB-7, LC-1…LC-6 (only IDs exist today)
- [ ] **A-04** Add injection, boundary, and language test prompts for each skill
- [ ] **A-03** Run all tests in at least one tool/model; record every run in `TESTING-EVAL.md` §6 results log
- [ ] **A-05** Enforce hard gate: zero invented prices/rates/tax/laws. Any hit = fix the skill, not the test
- [ ] **A-06** Add CI: `.github/workflows/validate-skills.yml` — frontmatter has `name` + `description`, `name` == folder, kebab-case, `SKILL.md` < 250 lines, no obvious secrets / unknown URLs (see `MAINTENANCE.md` §4)
- [ ] Fix every skill that fails its tests

**Done when:** results log is populated, zero hard-gate failures, and CI is green.

## P1 — Consistency and distribution

- [ ] **A-07** Add a support/status section to `README.md` (required by `MAINTENANCE.md` §2): Beta until v1.0, real response time, what is not supported
- [ ] **A-11** Replace the self-instruction text in `SECURITY.md` (line 21) with a real, keepable response time
- [ ] Verify install commands/paths against current Skills CLI and agent docs; update `README.md` and `DISTRIBUTION.md`
- [ ] **A-08** Fill the compatibility table in `TESTING-EVAL.md` §7 with real tested versions (Antigravity, Claude web/desktop, Claude Code)
- [ ] **A-09** Add `.skill` packaging step (zip per skill folder) and test an upload before release
- [ ] **A-10** `CHANGELOG.md`: add version, date, and per-skill notes (currently only "Unreleased")
- [ ] Add one filled, fictional example output per skill (brief, quote, checklist) so users see the expected shape

**Done when:** a stranger can install from the README alone and the compatibility table reflects real tests.

## P2 — Skill content fixes found in audit

- [ ] **A-12** `launch-checklist`: output format lacks an explicit **Unconfirmed** section even though rule 3 requires marking items unconfirmed (only "Open questions" exists). Add it.
- [ ] **A-13** `client-brief`: add an explicit step for what to do when injected instructions are detected (rules mention it, process does not)
- [ ] **A-14** `quote-builder`: add currency/rounding guidance and a visible arithmetic re-check example; state how totals are verified
- [ ] **A-15** Standardize placeholder + safety-note wording across all three skills (single shared reference or exact duplicate text)
- [ ] **A-16** Resolve version mismatch: README table says `v0.1` but skill frontmatter has no `version`; either add `version:` or drop the version column claim
- [ ] Optional: `CODE_OF_CONDUCT.md`, `.editorconfig`, markdown lint

**Done when:** no rule in a skill is missing from its output format, and wording is consistent.

## P3 — Beta and v0.1.0 release

- [ ] 5–10 freelancers try it on anonymized real situations
- [ ] Convert weak results into test cases; fix
- [ ] Human professional review of legal-adjacent wording (cannot be done by an AI)
- [ ] Feature freeze: bug fixes only
- [ ] Tag `v0.1.0`, GitHub Release with `.skill` files, description/topics/social preview
- [ ] Announce with honest limits and real results
- [ ] Update the denvora-web skills page

**Done when:** all `TESTING-EVAL.md` §9 release gates are checked.

## P4 — v0.2 and later

- [ ] `handover` skill
- [ ] `product-page` skill
- [ ] Indonesian-focused references (verified facts only)
- [ ] Bundles ("freelancer starter"); more agents tested
- [ ] Contract-related skill only with professional review
- [ ] Optional paid, customized skill packs and workshops (ties to the Denvora store)

## Working agreement

- One skill at a time; test before claiming.
- Report: done, untested, assumed.
- Update docs and `CHANGELOG.md` with every change.
- Never tick a box without evidence in the repo (test log, CI run, or release link).
