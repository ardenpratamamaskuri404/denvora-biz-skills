# PRD: denvora-biz-skills

**Version:** 1.0 (Official Release) · **Owner:** Arden Pratama Maskuri · **Status:** Released

## 1. Summary

An open-source collection of agent skills that help freelancers, small studios, and solo builders handle the business side of digital work: understanding clients, quoting honestly, handing over projects, and launching products. Each skill is a folder of instructions (Markdown) installable in Antigravity, Claude, Claude Code, and compatible agent environments.

## 2. Problem

1. Client requests arrive as messy chats and voice notes. Missing details cause scope creep and unpaid work.
2. Quotes are written ad hoc: unclear scope, forgotten exclusions, vague revision limits, guessed prices.
3. Launches skip basics (legal pages, payments testing, backups, SEO basics).
4. Project handovers lack structure: credentials leak in chat, warranty terms are undefined, and final sign-offs stall.
5. Digital product pages overpromise with fake social proof, hidden prerequisites, and vague refund terms.
6. AI assistants help but tend to **invent numbers, hide uncertainty, and overstep into legal/tax advice.**

## 3. Users

| Segment | Need |
|---|---|
| Freelancers (web, design, writing, dev) | Faster, clearer client communication, quotes, and handovers |
| Small studios / solo founders | Consistent process, launch discipline, and asset packaging |
| Beginners starting to sell services | Guidance on what to ask, include, and warranty |
| Digital product creators | Transparent product page copywriting that minimizes refunds |

Primary language: Indonesian and English users.

## 4. Goals and non-goals

**Goals**
1. A suite of **5 high-quality, fully tested** business skills covering the end-to-end client lifecycle.
2. Honest behavior: no invented numbers, assumptions labeled, clear "not professional advice" boundaries.
3. Easy install (one command, Git clone, or `.skill` zip upload) and easy contribution.
4. Low maintenance: plain text, zero runtime dependencies, cross-platform verification.

**Non-goals**
- No legal, tax, or accounting advice. No contract "templates presented as safe to sign".
- No automation that sends messages, invoices, or payments.
- No code runtime, scripts, or network access inside skills.
- Not a CRM or invoicing system.

## 5. Principles

1. Ask before assuming; label every assumption.
2. Never invent prices, rates, taxes, laws, or statistics.
3. Draft for the human to review, never act on their behalf.
4. Short skill files (<250 lines); details in references.
5. Friendly, plain language; match the user's language.

## 6. Scope

### Core 5 Skills (v1.0.0 GA)
| ID | Skill | Description | Status |
|---|---|---|:---:|
| S-1 | `client-brief` | Structures messy client inquiries into actionable briefs and prioritized questions | Released |
| S-2 | `quote-builder` | Builds honest fee proposals with exact math and clear boundary limits | Released |
| S-3 | `launch-checklist` | Generates prioritized pre-flight checklists across payments, SEO, legal, and backups | Released |
| S-4 | `handover` | Structures formal project offboarding, credential hygiene, and warranty boundaries | Released |
| S-5 | `product-page` | Drafts honest digital product copywriting with prerequisites and objection handling | Released |

### Quality & Governance Infrastructure
| ID | Component | Status |
|---|---|:---:|
| Q-1 | Test prompt packs for all 5 skills (`docs/tests/*.md`) | Complete |
| Q-2 | Real-world example outputs for all 5 skills (`docs/examples/*.md`) | Complete |
| Q-3 | Pre-packaged `.skill` zip bundles in `dist/` | Complete |
| Q-4 | Cross-platform validation matrix CI (Ubuntu, Windows, macOS) | Complete |
| Q-5 | Bilingual documentation (English & Indonesian) | Complete |

## 7. Success metrics

| Metric | How measured | Target | Actual (v1.0.0) |
|---|---|---|:---:|
| Trigger accuracy | Should/should-not prompt sets (10 of each per skill) | >90% | **100%** |
| "Invented number" incidents | Task tests (must be zero) | **0** (hard gate) | **0** (Pass) |
| Frontmatter & limit compliance | `node scripts/validate-skills.js` | 100% pass | **100% Pass** |
| Broken link count | `node scripts/verify-all.js` | 0 | **0 Broken** |

## 8. Risks & Mitigations

| Risk | Mitigation |
|---|---|
| Skill invents prices or legal claims | Hard rules, automated tests, placeholders, `LEGAL-SAFETY.md` |
| Users treat output as legal/tax advice | Clear notes in skill output and README |
| Skill doesn't trigger | Pushy, specific descriptions; trigger tests in ID and EN |
| Maintenance burden | Plain text only, zero external libraries, modular references |
| Prompt injection via pasted client text | Skills treat pasted content as data, never instructions |

## 9. v1.0 Release criteria

- [x] All 5 skills pass their trigger and task tests with prompt packs
- [x] Zero invented numbers or unverified pricing across all task tests
- [x] Legal/financial boundaries verified in tests
- [x] Pre-packaged `.skill` files built and verified in `dist/`
- [x] Cross-platform GitHub Actions CI passing on Ubuntu, Windows, and macOS
- [x] Bilingual README, CONTRIBUTING, CODE_OF_CONDUCT, SECURITY, and LICENSE updated
