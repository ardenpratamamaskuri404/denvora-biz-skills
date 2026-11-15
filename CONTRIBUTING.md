# Contributing

Thanks for helping. The most useful contribution is **a real situation where a skill gave a weak result**.

## Report a weak result (issue)

Include:
1. Which skill (`client-brief`, `quote-builder`, `launch-checklist`)
2. Your prompt (remove names, client secrets, and private details)
3. What the AI produced
4. What you expected
5. Tool and model used (e.g. Antigravity, Claude, ChatGPT, Cursor)

## Propose a change (pull request)

1. Fork and branch.
2. Read [`AGENTS.md`](AGENTS.md) for core architecture and safety rules.
3. Keep `SKILL.md` short (target under 250 lines); put detail in `references/`.
4. Validate changes using `node scripts/validate-skills.js` and `node scripts/verify-all.js`.
5. Update [`README.md`](README.md) and [`CHANGELOG.md`](CHANGELOG.md) if skill behavior or scope changes.
6. Describe what changed and why.

## Rules

- No invented prices, laws, statistics, or testimonials.
- No real client data. Anonymize everything.
- Legal and tax content: draft and checklist only, with a clear "check with a qualified professional" note.
- Be kind in discussions. Assume good intent.

## New skill ideas

Open an issue first with: who needs it, the problem, an example input and the output they'd want, and what the skill must refuse to do.
