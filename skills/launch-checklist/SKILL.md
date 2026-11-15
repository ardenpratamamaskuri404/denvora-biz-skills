---
name: launch-checklist
version: 1.0.0
description: Creates a tailored pre-launch checklist for a website, app, digital product, or service offering, covering product readiness, payments, legal pages, domain and HTTPS, SEO basics, analytics and privacy, performance, support, rollback, and announcement. Use when the user says "mau rilis", "launch", "go live", "siap tayang?", "checklist sebelum rilis", "sebelum deploy", or is about to publish or start selling something online, even if they don't ask for a checklist.
---

# Launch Checklist

Help the user launch without forgetting the boring-but-important parts. A good checklist is tailored, prioritized, and honest about what is still unconfirmed.

## Rules (and why)

1. **Tailor it.** A landing page and a paid digital product need different things. A generic dump wastes the user's time and hides what matters.
2. **Prioritize:** *Blocker* (don't launch without it), *Should*, *Nice*. Give a one-line reason for each item.
3. **Items are unconfirmed until the user confirms with specifics.** "It's all done" is not confirmation; ask what was checked.
4. **No compliance claims.** Never say something is legal, compliant, or tax-correct. For legal, tax, privacy, and registration items, say "check the rules that apply to your business and country with a professional or official sources". Don't state specific laws or thresholds from memory.
5. **Don't ask for secrets.** Never request passwords, API keys, or payment details.
6. **Reply in the user's language.**

## Process

1. **Identify the launch:** what (website, app, digital product, service), who it is for, country/region, whether it takes payments or collects personal data, hosting/stack if known. Ask only for what you need (a few questions); state assumptions for the rest.
2. **Select areas** from `references/master-checklist.md` that apply. Drop the rest.
3. **Write the checklist** with priorities and reasons.
4. **Split by time:** *Before launch*, *Launch day*, *First week*.
5. **List open questions** and unconfirmed items.
6. **Summarize the blockers** at the top so the user sees them first.

## Output format

1. **Launch type and assumptions** (2–4 lines).
2. **Blockers** (must be done before launch).
3. **Checklist by area:** `- [ ] item: why it matters` grouped as Blocker / Should / Nice.
4. **Launch day** and **First week**.
5. **Open questions and unconfirmed items / Item belum dikonfirmasi:** specific items requiring explicit proof or testing before checking off (e.g., claiming "everything done" without specifics stays unconfirmed).
6. **Safety note:** short, in the user's language:
   - Indonesian: `> **Catatan Penting:** Daftar periksa ini menunjukkan hal-hal yang perlu diverifikasi dan **bukan nasihat hukum, pajak, atau kepatuhan regulasi profesional**. Periksa kewajiban dan aturan resmi yang berlaku untuk bisnis Anda bersama profesional yang berkualifikasi.`
   - English: `> **Important Note:** This checklist highlights items to verify and is **not professional legal, tax, or regulatory advice**. Verify applicable rules and compliance requirements with a qualified professional or official sources.`
7. **Next step:** one clear action.

## Boundaries

- No legal, tax, or compliance advice or certification.
- No invented rules or numbers.
- Don't execute or test anything on the user's behalf; list how *they* can check (for example, "do a real test purchase and confirm delivery").

## References

- `references/master-checklist.md`: all areas with items by launch type. Read at step 2.
