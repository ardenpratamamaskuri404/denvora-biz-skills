# ROADMAP.md — current execution plan

Near-term execution plan for the repo. Long-range feature planning for v1.0 → v5.0 lives in [`RELEASE-ROADMAP.md`](RELEASE-ROADMAP.md); the evidence behind the tasks below is in [`AUDIT.md`](AUDIT.md).

Current state (2026-11-15): `v1.0.0` Official GA Release, 5 skills, cross-platform CI matrix, packaging scripts, 5 test packs, 58 recorded test runs.

Legend: **P0** = blocker · **P1** = before beta · **P2** = polish.

---

## P0 — Make every claim true (blocker)

- [x] **B-01** Remove `docs/` from `.gitignore`; commit `docs/` (tests, examples, audit, roadmaps)
- [x] **B-02** Track `dist/*.skill` packages directly in git for seamless user download
- [x] **B-03** Add test packs + runs for `handover` and `product-page` (`docs/tests/handover.md`, `product-page.md`)
- [x] **B-04** Align compatibility table to verified platforms (Antigravity, Claude, Claude Code)
- [x] **B-05** Replace placeholder in `SECURITY.md` with firm 48-hour SLA response policy
- [x] **B-06** Update `TESTING-EVAL.md` gates to 5 skills and add comprehensive test result table
- [x] **B-07** CI: validate `version:` semver and run `verify-all.js`
- [x] **B-08** Make `verify-all.js` zip inspection cross-platform via pure Node.js binary ZIP header reader
- [x] **B-09** Document verified runtime environments and test conditions accurately

**Status:** ALL P0 BLOCKERS RESOLVED.

## P1 — Sync the docs

- [x] **C-02** Promote `handover` and `product-page` in `SKILLS-CATALOG.md` to v1.0.0
- [x] **C-03** Update `PRD.md` to the 5-skill scope and v1.0 GA release status
- [x] **C-04** Fix "three core skills" in `MAINTENANCE.md` and `CONTRIBUTING.md` to reflect 5 skills
- [x] **C-05** Update `DISTRIBUTION.md` owner line and topic list
- [x] **C-06** Align README badges to `v1.0.0 (Official Release)`
- [x] **C-07** Pre-package all 5 `.skill` zip archives in `dist/` and verify in CI
- [x] **C-08** Scan all markdown files for stale placeholders in `scripts/validate-skills.js`
- [x] **C-09** Add real-world example outputs for `handover` and `product-page` (`docs/examples/`)
- [x] **C-10** Document v1.0.0 GA release notes and per-skill test status in `CHANGELOG.md`
- [x] **C-11** Tag commit aligned with release PR to `main`

**Status:** ALL P1 SYNC ITEMS RESOLVED.

## P2 — Ecosystem and Community

- [ ] 5–10 freelancers test on anonymized real situations
- [ ] Convert community weak-result feedback into new test cases
- [ ] Periodic review of legal-adjacent wording
- [ ] Test installer compatibility against upcoming agent releases

---

## Long-Range Roadmap

See [`RELEASE-ROADMAP.md`](RELEASE-ROADMAP.md) for long-range milestones:

| Release | Version | Theme | Status |
|---|---|---|:---:|
| 1 | `v1.0.0` | Trust & Proof (Core 5 Skills) | **Released** |
| 2 | `v2.0.0` | Win the Client (Proposal, Discovery) | Planned |
| 3 | `v3.0.0` | Deliver & Protect (SLA, Retainer, Escrow) | Planned |
| 4 | `v4.0.0` | Grow & Prove (Case Studies, Testimonial Intake) | Planned |
| 5 | `v5.0.0` | Scale & Ecosystem (Agency SOPs & Bundles) | Planned |
