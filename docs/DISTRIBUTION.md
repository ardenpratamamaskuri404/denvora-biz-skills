# DISTRIBUTION.md

## 1. Repo layout for installers

Keep each skill in `skills/<name>/SKILL.md`. This layout is what common skills installers look for. Verify against the current installer's docs before launch.

## 2. Install methods

| Method | Command / action |
|---|---|
| Skills CLI (project) | `npx skills add ardenpratamamaskuri404/denvora-biz-skills -a antigravity` |
| Skills CLI (global) | `npx skills add ardenpratamamaskuri404/denvora-biz-skills -a antigravity -g` |
| Single skill | Use the installer's option for choosing a skill (check `npx skills --help`) |
| Manual | Copy `skills/<name>/` to `.agent/skills/` (project) or `~/.gemini/antigravity/skills/` (global); restart the agent session |
| Claude web/desktop | Upload the `.skill` file in Settings → Capabilities → Skills |

Always verify flags and paths against the tool's current documentation.

## 3. Packaging `.skill` files

Each skill is packaged as a `.skill` file (a zip of the skill folder) and attached to GitHub Releases. Build them from the skill folders at release time and test an upload before publishing.

## 4. Versioning

- Semantic versioning for the repo: `0.1.0`, `0.2.0`, `1.0.0`.
- Each skill notes its own version in the README table.
- Breaking behavior changes (renamed skill, changed output format) bump the minor version before 1.0 and the major version after.
- Keep `CHANGELOG.md` current.

## 5. Release steps

1. All release gates in `TESTING-EVAL.md` pass.
2. Update README table, catalog, CHANGELOG.
3. Confirm repository owner (`ardenpratamamaskuri404`) and release tags.
4. Tag the version and create a GitHub Release with the `.skill` files attached.
5. Test a fresh install on a clean setup, using only the README.
6. Announce with honest limits and real test results.

## 6. Repo settings

- Description and topics (see below), social preview image, issue templates ("weak result" report, "new skill idea"), PR template with the definition of done.
- Branch protection on `main`; require review.
- Enable private vulnerability reporting if available.

**Suggested GitHub description:**
```
Agent skills for freelancers and digital agencies: client briefs, honest quotes, launch checklists, project handovers, and product pages.
```

**Suggested topics:**
```
agent-skills, ai-skills, freelancer, client-brief, quote-builder, launch-checklist, handover, product-page, antigravity, claude, claude-code, productivity, open-source
```
(Add `antigravity` and `claude` only after testing in both.)

## 7. Compatibility note

Different agents read skills slightly differently. Test in each tool you claim, and note the tested versions in the compatibility table.
