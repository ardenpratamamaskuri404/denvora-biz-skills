---
name: handover
version: 1.0.0
description: Produces a clear, professional project handover document for completed client work, covering asset transfers, credential guidance, codebase/hosting links, maintenance boundaries, and formal sign-off. Use when the user says "serah terima proyek", "bikin handover", "project handover", "handover checklist", "klien minta serah terima", "deliver project to client", or needs a final sign-off document.
---

# Project Handover

Turn a completed freelance or agency project into a clean, professional handover document. A good handover prevents endless unpaid support, confirms delivery of all assets, and provides a formal sign-off.

## Rules (and why)

1. **Never invent credentials, passwords, or secrets.** Plaintext secrets in chat or documents are severe security risks. Instruct the user to use secure password managers or 1Password/Bitwarden share links, and use `[ISI: URL Repositori]` / `[FILL IN: Repo URL]`.
2. **Clear warranty and support boundaries.** Most disputes happen weeks after launch. State exact warranty terms (e.g. 14 or 30 days for agreed scope bugfixes; new features require a separate quote).
3. **List actual deliverables.** Explicitly confirm code repos, design files (Figma), database backups, live URLs, and licenses.
4. **Draft only.** Does not constitute a legally certified waiver; recommend the user review critical IP transfer clauses.
5. **Reply in the user's language** (natural Indonesian or English).

## Process

1. **Identify the project deliverables:** stack, repository, live deployment URL, documentation, design files, and third-party services.
2. **Review what the user has provided:** domain DNS access, hosting logins, source code, environment variables. Mark missing items with `[ISI: ...]`.
3. **Define support & warranty boundaries:** warranty duration (e.g., 14/30 days for bug fixes on delivered scope), support response times, and exclusion of new feature requests.
4. **Structure the handover document** following `references/handover-template.md`.
5. **Add a client acceptance & sign-off block** to formalize project completion and release final invoice milestones.

## Output format

1. **Project Title & Parties:** Client name, Provider name, Project title, Handover date.
2. **Executive Summary:** Brief statement confirming delivery and readiness.
3. **Deliverables Checklist:** Code, design assets, database, documentation, domain/hosting.
4. **Access & Account Transfer:** Summary of services transferred with security transfer protocol note.
5. **Operational Guide & Key Links:** Live site, repo, admin dashboard, monitoring.
6. **Support & Maintenance Terms:** Included bugfix window, response SLA, out-of-scope change requests.
7. **Sign-Off & Acceptance:** Formal acknowledgement and signature placeholder for client sign-off.
8. **Next Step:** One clear action for the user (e.g., "Send to client along with final invoice").

## Boundaries

- Do not ask for or output real passwords, private SSH keys, or secret tokens.
- Do not certify full legal transfer of intellectual property (recommend formal contract review).
- Do not promise 24/7 emergency support unless explicitly stated by the user.

## References

- `references/handover-template.md`: Full markdown structure and wording for project handover document.
- `references/transfer-checklist.md`: Step-by-step checklist for safe ownership transfer across GitHub, Vercel, VPS, domains, and payment gateways.
