<p align="center">
  <img src="assets/denvora-biz-skills-logo.png" alt="Denvora Biz Skills" width="380" />
</p>

<div align="center">

# denvora-biz-skills

**Agent skills for people who sell digital products and services.**

Turn messy client chats into briefs, briefs into honest quotes, and projects into launches that don't forget the boring-but-important parts.

</div>

---

## Why

Freelancers, small studios, and solo builders run the business side with chat messages, memory, and guesswork. AI assistants can help, but without guidance they tend to invent prices, skip scope limits, and sound more certain than they should.

These skills give your AI assistant clear working habits for business tasks: **ask before assuming, never invent numbers, mark what is unknown, and keep the human in charge.**

## Skills

<p align="center">
  <img src="assets/product-overview.png" alt="Product Overview" width="800" />
</p>

<p align="center">
  <img src="assets/workflow-lifecycle.png" alt="Workflow Lifecycle" width="800" />
</p>


| Skill | What it does | Status |
|---|---|---|
| [`client-brief`](skills/client-brief) | Turns messy client messages into a clear brief, scope, assumptions, and prioritized questions | v0.1 |
| [`quote-builder`](skills/quote-builder) | Builds a clear quote or proposal from a brief and **your own** rates | v0.1 |
| [`launch-checklist`](skills/launch-checklist) | Creates a tailored pre-launch checklist for a website, app, product, or service | v0.1 |
| `handover` | Project handover: docs, access, and maintenance notes | planned |
| `product-page` | Honest product page copy: what's inside, who it's for, limits | planned |

Details for each skill: [`docs/SKILLS-CATALOG.md`](docs/SKILLS-CATALOG.md).

## Install

Pick one.

**Skills CLI** (installs from this repo):

```bash
# project scope
npx skills add USERNAME/denvora-biz-skills -a antigravity

# global scope
npx skills add USERNAME/denvora-biz-skills -a antigravity -g
```

**Manual copy:** copy the folder of the skill you want from `skills/` into your agent's skills directory (for Antigravity: `.agent/skills/` in a project, or `~/.gemini/antigravity/skills/` globally), then restart the agent session.

**Claude (web / desktop):** download the `.skill` file from the Releases page and upload it under Settings → Capabilities → Skills.

> Verify commands and paths against your tool's current documentation. They can change between versions. Replace `USERNAME` with the repository owner.

## Use

Just talk to your AI naturally. The matching skill activates by itself:

- "Klien saya minta dibuatkan website toko online, ini chat-nya…" → `client-brief`
- "Bikinin penawaran dari brief ini, tarif saya …" → `quote-builder`
- "Saya mau rilis produk digital minggu depan, apa saja yang harus dicek?" → `launch-checklist`

Skills reply in the language you write in.

## Principles

1. **Never invent numbers.** Prices, tax rates, deadlines, and legal terms come from you or are marked as placeholders.
2. **Mark the unknown.** Assumptions are labeled as assumptions.
3. **You decide.** The AI drafts; you review and send.
4. **Not professional advice.** Output is a working draft, **not legal, tax, or financial advice**. Have contracts and legal pages reviewed by a qualified professional.

## Honest limits

- These skills improve structure and consistency. They don't replace your judgment about clients and pricing.
- Results vary by AI model and tool. Only tools listed in the compatibility table in [`docs/TESTING-EVAL.md`](docs/TESTING-EVAL.md) have been tested.
- Legal and tax requirements differ by country and business type. Skills only point out what to check.

## Docs

`docs/PRD.md` · `docs/SKILLS-CATALOG.md` · `docs/SKILL-AUTHORING.md` · `docs/TESTING-EVAL.md` · `docs/LEGAL-SAFETY.md` · `docs/DISTRIBUTION.md` · `docs/MAINTENANCE.md` · `docs/ROADMAP.md` · `docs/AUDIT.md`

## Contributing

See [`CONTRIBUTING.md`](CONTRIBUTING.md). Real client situations (anonymized) where a skill gave a weak result are the most valuable contribution.

## License

MIT.


## Safety Architecture

Zero invented prices, prompt injection isolation, and safe draft boundaries.