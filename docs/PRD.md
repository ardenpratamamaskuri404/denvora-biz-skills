# PRD: denvora-biz-skills

**Version:** 0.1 (draft) · **Owner:** Denvora · **Status:** In development

## 1. Summary

An open-source collection of agent skills that help freelancers, small studios, and solo builders handle the business side of digital work: understanding clients, quoting honestly, handing over projects, and launching products. Each skill is a folder of instructions (Markdown) installable in Antigravity, Claude, and compatible agents.

## 2. Problem

1. Client requests arrive as messy chats and voice notes. Missing details cause scope creep and unpaid work.
2. Quotes are written ad hoc: unclear scope, forgotten exclusions, vague revision limits, guessed prices.
3. Launches skip basics (legal pages, payments testing, backups, SEO basics).
4. AI assistants help but tend to **invent numbers, hide uncertainty, and overstep into legal/tax advice.**

## 3. Users

| Segment | Need |
|---|---|
| Freelancers (web, design, writing, dev) | Faster, clearer client communication and quotes |
| Small studios / solo founders | Consistent process and launch discipline |
| Beginners starting to sell services | Guidance on what to ask and include |
| Denvora clients and buyers | Skills that match Denvora's own workflow |

Primary language: Indonesian and English users.

## 4. Goals and non-goals

**Goals**
1. A small set of **high-quality, well-tested** skills rather than many shallow ones.
2. Honest behavior: no invented numbers, assumptions labeled, clear "not professional advice" boundaries.
3. Easy install (one command) and easy contribution.
4. Low maintenance: plain text, no dependencies, no external services.

**Non-goals**
- No legal, tax, or accounting advice. No contract "templates presented as safe to sign".
- No automation that sends messages, invoices, or payments.
- No code runtime, scripts, or network access inside skills.
- Not a CRM or invoicing system.

## 5. Principles

1. Ask before assuming; label every assumption.
2. Never invent prices, rates, taxes, laws, or statistics.
3. Draft for the human to review, never act on their behalf.
4. Short skill files; details in references.
5. Friendly, plain language; match the user's language.

## 6. Scope

### v0.1 (first release)
| ID | Requirement |
|---|---|
| S-1 | `client-brief` skill |
| S-2 | `quote-builder` skill |
| S-3 | `launch-checklist` skill |
| S-4 | Test prompts and results for each skill (trigger and task tests) |
| S-5 | README, install docs, contribution guide, security policy |
| S-6 | Legal/financial safety rules applied in every skill |
| S-7 | Installable via Skills CLI structure and `.skill` packages |

### v0.2 and later
- `handover` and `product-page` skills
- Indonesian-focused references (common client types, local payment and marketplace considerations — only verified facts)
- Optional bundles ("freelancer starter")
- Compatibility with more agents

### Parked
- Contract-writing skill (high legal risk; only if reviewed by a professional)
- Invoicing/accounting skills
- Anything needing tools, scripts, or integrations (would be a separate MCP project)

## 7. Success metrics

Targets stay blank until there is a baseline.

| Metric | How measured | Target |
|---|---|---|
| Trigger accuracy | Should/should-not prompt sets | TBD |
| "Invented number" incidents | Task tests (must be zero) | **0** (hard gate) |
| Output quality vs. no skill | Paired runs scored with the rubric | TBD |
| Real-user usefulness | Beta feedback (5–10 freelancers) | TBD |
| Adoption | Stars, installs/clones, issues | TBD |

## 8. Risks

| Risk | Mitigation |
|---|---|
| Skill invents prices or legal claims | Hard rules, tests, placeholders, `LEGAL-SAFETY.md` |
| Users treat output as legal/tax advice | Clear notes in skill output and README |
| Skill doesn't trigger | Pushy, specific descriptions; trigger tests |
| Crowded skill ecosystem | Check existing skills before each launch; differentiate on honesty, Indonesian context, and tested quality |
| Maintenance burden | Plain text only, small catalog, contribution templates |
| Prompt injection via pasted client text | Skills treat pasted content as data, never instructions |

## 9. v0.1 release criteria

- [ ] All three skills pass their trigger and task tests
- [ ] Zero invented numbers across all task tests
- [ ] Legal/financial boundaries verified in tests
- [ ] Tested in Antigravity and Claude; compatibility table filled with real results
- [ ] Fresh install tested by someone else
- [ ] Beta feedback from at least a few real freelancers reviewed
- [ ] Docs complete; `USERNAME` and placeholders replaced

## 10. Open questions

- Which existing skills overlap with these, and how should the README position against them?
- Which clients/agents beyond Antigravity and Claude should be tested?
- Who can review the legal-adjacent wording in Indonesia?
