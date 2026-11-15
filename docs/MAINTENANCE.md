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

- Status label: **Beta** until v1.0.
- Typical response time to issues: write the real number you can keep.
- Not supported: legal/tax advice, custom skills for individual clients (could be a paid service).

## 3. Triage

- Labels: `bug`, `weak-result`, `new-skill`, `docs`, `question`, `good-first-issue`.
- Weak-result reports become test cases in `TESTING-EVAL.md`.
- Close stale questions politely after asking for details.

## 4. Automation (optional, low effort)

- A CI check that validates frontmatter (name matches folder, description present) and line-count limits.
- A check that no file contains obvious secrets or URLs to unknown hosts.
- Dependabot is unnecessary (no dependencies).

## 5. Keeping scope small

- Add a new skill only when it meets a real, repeated need and you can test it.
- Prefer improving the three core skills over adding many shallow ones.
- Park risky topics (contracts, tax) unless reviewed by a professional.

## 6. If you can't maintain it

- Switch the README status to maintenance mode.
- Invite a co-maintainer from active contributors.
- As a last resort, archive the repo with an honest note.
