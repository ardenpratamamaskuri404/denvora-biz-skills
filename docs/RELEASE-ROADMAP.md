# RELEASE-ROADMAP.md — Feature & Extension Roadmap (v1.0 → v5.0)

Long-range feature and skill architecture roadmap for `denvora-biz-skills`. This document outlines the planned multi-version trajectory across the entire digital freelance and agency lifecycle.

Every release operates under strict evidence-based promotion: a milestone only graduates when its test suites pass with zero hallucinations and verified cross-platform compatibility.

---

## Core Guiding Principles (All Releases)

1. **Zero-Invented Facts & Pricing:** Prices, hourly rates, tax figures, laws, statistics, and testimonials must originate strictly from user input or marked placeholders (`[FILL IN: ...]` / `[ISI: ...]`).
2. **Draft-Only Safeguards:** All outputs touching commercial contracts, compliance, or financial figures are explicit drafts intended for human review. Never provide unauthorized legal certifications.
3. **Pure Portable Markdown:** Zero runtime dependencies, zero external network calls, zero executable code inside skill instructions. Maximum cross-agent compatibility.
4. **Evidence Before Assertion:** New skills require exhaustive trigger suites (should/should-not), task tests, and verified compatibility matrices before merging into release branches.
5. **Single Responsibility Architecture:** Skills stay focused and concise (<250 lines in `SKILL.md`), delegating detailed domain templates and question banks to `references/`.

---

## 5-Stage Release Lifecycle Summary

| Release | Version | Strategic Theme | Primary Milestone Scope | Status |
|:---:|:---:|---|---|:---:|
| **1** | `v1.0.0` | **Trust & Proof (Core Suite)** | 5 foundational skills (`client-brief`, `quote-builder`, `launch-checklist`, `handover`, `product-page`), cross-platform CI matrix, test suites, `.skill` distribution. | **Released (GA)** |
| **2** | `v2.0.0` | **Win the Client (Discovery & Pricing)** | Client discovery call extraction, formula-based rate calculation, non-coercive proposal follow-up, structured client onboarding. | Planned |
| **3** | `v3.0.0` | **Deliver & Protect (Project Execution)** | Milestone project planning, change order impact quantification, transparent status reports, UAT acceptance, courteous invoice reminders. | Planned |
| **4** | `v4.0.0` | **Grow & Prove (Reputation & Growth)** | Ethical case study synthesis, client testimonial intake workflows, pre-launch sequence copy, verified SEO content briefs. | Planned |
| **5** | `v5.0.0` | **Scale & Ecosystem (Team & Tooling)** | Subcontractor scope delegation, agency operational SOPs, Skill Authoring Kit, modular dependency checking, localized industry packs. | Planned |

---

## Milestone 1 — `v1.0.0` · Trust & Proof (GA)

**Status:** Completed & Officially Released (2026-11-15).

**Objective:** Establish the 5 core skills as bulletproof, honest, production-ready operational standards for freelancers and agencies.

**Delivered Skills:**
- [`client-brief`](../skills/client-brief): Transforms chaotic client messages and audio notes into structured briefs, proposed scope boundaries, and prioritized questions.
- [`quote-builder`](../skills/quote-builder): Constructs transparent commercial proposals with verified mathematical formulas, exclusions, and change-request clauses.
- [`launch-checklist`](../skills/launch-checklist): Generates prioritized pre-flight checklists across DNS, HTTPS, payment testing, backups, and legal disclaimers.
- [`handover`](../skills/handover): Structures formal project completion documents, secure credential transfer protocol (anti-plaintext), and 30-day bugfix warranty limits.
- [`product-page`](../skills/product-page): Drafts honest digital product landing page copywriting with technical prerequisites, honest anti-personas, and objection handling.

**Infrastructure Highlights:**
- 58 recorded task evaluations with 0 hard gate failures.
- Zero-dependency binary ZIP header inspection for cross-platform packaging.
- Cross-platform CI matrix across Ubuntu, Windows, and macOS.
- Pre-packaged `.skill` archive bundles tracked in `dist/`.

---

## Milestone 2 — `v2.0.0` · Win the Client

**Objective:** Streamline the pre-project acquisition phase from initial meeting discovery to formal client onboarding.

### Planned Skills

| Skill | Core Function | Example Triggers | Safety & Boundary Rules |
|---|---|---|---|
| `discovery-call` | Synthesizes meeting notes and call transcripts into verified requirements, budget indicators, and decision-maker maps. | "discovery call notes", "meeting transcript", "catatan telepon klien" | Never invents stated budgets; strictly quotes spoken facts; flags unverified assumptions. |
| `pricing-strategy` | Calculates hourly rates and fixed package pricing strictly from the **user's actual living costs, billable hours, and target revenue**. | "calculate my rate", "pricing formula", "hitung tarif per jam" | Never quotes arbitrary "market averages"; zero external web scrapes; requires user expense inputs. |
| `proposal-followup` | Generates courteous, non-aggressive check-in sequences, value reinforcement, and diplomatic negotiation boundaries. | "follow up proposal", "client hasn't replied", "tindak lanjut penawaran" | Never generates manipulative urgency, fake expiring discounts, or hostile pressure. |
| `client-onboarding` | Assembles a formal client welcome packet: kickoff agenda, required asset intake checklist, and communication guidelines. | "client onboarding", "kickoff checklist", "welcome pack klien" | Does not automate billing or communications; includes draft protection notices. |

### Architectural Features
- **Workflow Recipes:** Documented multi-skill execution chains (e.g., `discovery-call` ➡️ `client-brief` ➡️ `pricing-strategy` ➡️ `quote-builder` ➡️ `proposal-followup`).
- **Standardized Output Modes:** Concise vs. Comprehensive output flags tailored for technical vs. non-technical client counterparts.

---

## Milestone 3 — `v3.0.0` · Deliver & Protect

**Objective:** Safeguard ongoing project delivery against scope creep, missed milestones, and payment disputes.

### Planned Skills

| Skill | Core Function | Example Triggers | Safety & Boundary Rules |
|---|---|---|---|
| `project-plan` | Builds milestone schedules, dependency maps, and risk registers from agreed project scope. | "create project schedule", "milestone plan", "jadwal pengerjaan proyek" | Uses user-provided timeline estimates; labels all dates as provisional targets. |
| `change-request` | Quantifies the scope, timeline, and cost impacts of client-requested feature additions during active development. | "client requested extra feature", "change order", "perubahan scope" | Requires user cost inputs; never promises client approval; enforces written change orders. |
| `status-update` | Produces clear periodic progress reports, decision logs, and upcoming blocker flags. | "weekly status report", "progress update", "laporan mingguan" | Only reports verified completed items; never fabricates progress percentages. |
| `uat-acceptance` | Generates structured User Acceptance Testing (UAT) criteria, testing scripts, and bug severity triage. | "UAT checklist", "user acceptance testing", "uji kelayakan sistem" | Refuses to certify system readiness without documented user test results. |
| `payment-reminder` | Drafts firm, professional invoice follow-ups and escalation notices for overdue accounts. | "overdue invoice email", "payment reminder", "ingatkan pembayaran" | Strictly draft-only communication; zero automated debt collection; never gives legal collection advice. |

---

## Milestone 4 — `v4.0.0` · Grow & Prove

**Objective:** Transform completed client successes into verifiable social proof and marketing assets without resorting to fake reviews.

### Planned Skills

| Skill | Core Function | Example Triggers | Safety & Boundary Rules |
|---|---|---|---|
| `case-study` | Converts completed project archives into an anonymized, outcome-driven business case study. | "write case study", "portfolio writeup", "studi kasus proyek" | Anonymizes confidential client data; requires verified metrics; zero fabricated ROI stats. |
| `testimonial-request` | Drafts ethical testimonial collection questions and formal usage consent agreements. | "ask client for review", "testimonial prompt", "minta ulasan klien" | Never invents reviews; strictly guides genuine client reflection. |
| `launch-sequence` | Structures promotional copy and milestone announcements for new product or service launches. | "launch sequence", "announcement copy", "peluncuran layanan" | Zero guaranteed earnings claims; transparent about requirements and limitations. |
| `content-brief` | Structures editorial and SEO content briefs from user-provided keyword and audience research. | "SEO content brief", "article outline", "brief konten blog" | Never fabricates search volumes or rankings; processes user research data only. |
| `analytics-review` | Interprets raw analytics metrics provided by the user to identify actionable business insights. | "review website traffic", "analyze conversions", "baca data analitik" | Labels data uncertainty; refuses to invent industry conversion benchmarks. |

---

## Milestone 5 — `v5.0.0` · Scale & Ecosystem

**Objective:** Enable solo operators to scale into boutique digital agencies and empower the open-source community to contribute modular skills safely.

### Planned Skills & Tooling

| Skill / Tool | Core Function | Example Triggers | Safety & Boundary Rules |
|---|---|---|---|
| `subcontract-brief` | Drafts Statements of Work (SoW) and deliverables checklists for outsourced freelancers and subcontractors. | "subcontractor brief", "hire contractor", "brief untuk vendor" | Omits client-confidential data; requires independent legal contract review. |
| `team-sop` | Generates agency Standard Operating Procedures (SOPs) for team handoffs, QA, and escalation. | "agency SOP", "internal workflow", "standar operasional tim" | Strictly operational guidelines; does not constitute employment law advice. |
| `client-portal-spec` | Specifies user requirements and architecture for client progress dashboards and status pages. | "client portal spec", "dashboard architecture" | Pure specification document; zero runtime or network integrations. |
| `skill-authoring-kit` | Meta-skill and linter assisting community contributors in authoring compliant, verified business skills. | "create new skill", "author a skill", "buat skill baru" | Enforces strict AGENTS.md rules, line limits, and zero-hallucination guardrails. |
| `localize-skill` | Adapts skill question banks and templates to specific international legal/commercial regions. | "localize skill", "adapt to region", "lokalisasi pasar" | Strictly incorporates verified statutory references; never guesses local regulations. |

---

## Non-Goals (Permanent Architectural Boundaries)

The following areas are intentionally and permanently excluded from `denvora-biz-skills`:

- **No Legal or Tax Certification:** Never outputs "certified legally binding" contracts or tax compliance filings.
- **No Autonomous Automation:** Never dispatches live emails, sends financial invoices, or triggers payment gateway charges directly.
- **No Code Runtime or External Network Dependencies:** Skills remain static Markdown instructions. Integrations requiring database access or webhooks belong in dedicated MCP servers.
- **No Proprietary Market Rate Databases:** Never claims to know standard industry pricing; rates always originate from the user's specific costs and preferences.

---

## Release Governance & Quality Gates

Each milestone release must satisfy the following verifiable criteria before tagging:

1. **Trigger Validation:** 10+ explicit triggering prompts and 10+ near-miss non-triggering prompts documented per skill.
2. **Hard Gate Zero-Hallucination:** 100% pass rate on task evaluations with zero invented prices, taxes, or credentials.
3. **Automated Cross-Platform CI:** All validation suites pass cleanly across Ubuntu, Windows, and macOS runners.
4. **Synchronized Documentation:** Frontmatter versions, catalog specs, PRD, and changelog updated in unison.
