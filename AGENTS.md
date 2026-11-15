# AGENTS.md — denvora-biz-skills

Entry point for any AI agent working on this repo. Read this first.

## Project

A collection of agent skills (folders with `SKILL.md`) for business tasks of freelancers, solo builders, and digital agencies: client briefs, quotes, launch checklists, and more. Plain Markdown, no code runtime, no dependencies.

## Layout

```
denvora-biz-skills/
├─ skills/<skill-name>/SKILL.md   # one folder per skill
│  └─ references/                 # templates, question banks (loaded only when needed)
├─ assets/                        # logo, workflows, product overview
├─ dist/                          # pre-packaged .skill zip archives
├─ scripts/                       # validation and build utilities
├─ README.md  CONTRIBUTING.md  SECURITY.md  CHANGELOG.md  LICENSE
```

## Rules

1. **Never invent facts.** No fake prices, tax rates, laws, statistics, testimonials, or examples presented as real. Use clearly labeled placeholders `[FILL IN: ...]` or `[ISI: ...]`.
2. **Draft only.** For anything touching contracts, taxes, or compliance, explicitly state output is a draft and suggest professional review. Never provide legal/tax certifications.
3. **Keep `SKILL.md` short** (target under ~250 lines). Move detail to `references/`.
4. **Frontmatter must have `name`, `version`, and `description`;** `name` equals the folder name (kebab-case).
5. **Descriptions say what the skill does and when to trigger it,** including natural phrases in Indonesian and English.
6. **Every skill replies in the user's language** and never makes the user feel dumb.
7. **Verify, then report.** Run `node scripts/validate-skills.js` and `node scripts/verify-all.js` before claiming a skill works.
8. **Don't weaken rules** to make a skill pass.
9. **Update README and CHANGELOG** when behavior or features change.
10. **No secrets or real client data** in the repo. Examples must be fictional or anonymized.

## Definition of done (per skill change)

- [ ] Frontmatter valid; folder name matches `name`
- [ ] Line count under 250 lines
- [ ] Safe disclaimers and zero-invented-pricing rules respected
- [ ] README tables and CHANGELOG updated
- [ ] `node scripts/validate-skills.js` passes with zero errors
- [ ] `node scripts/verify-all.js` passes with zero broken links
