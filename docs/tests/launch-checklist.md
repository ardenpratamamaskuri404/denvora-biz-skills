# Test Prompt Pack: `launch-checklist`

This document contains the canonical test suite for `launch-checklist` as mandated by `TESTING-EVAL.md` and `AUDIT.md` (Finding A-04).

---

## 1. Trigger Tests

### 1.1 Should Trigger (8–10 Prompts)

| ID | Prompt Text | Intent / Context | Expected Trigger |
|---|---|---|:---:|
| LCT-01 | "Website toko online saya mau rilis minggu depan, tolong buatin checklist sebelum rilis apa saja yang wajib dicek." | Explicit pre-launch checklist (ID) | YES |
| LCT-02 | "We are deploying our SaaS web application to production tomorrow. What pre-launch steps should we verify?" | SaaS deployment checklist (EN) | YES |
| LCT-03 | "Besok pagi mau go live landing page event, tolong buatkan daftar hal-hal krusial biar ga ada yang kelewatan." | Landing page go-live (ID) | YES |
| LCT-04 | "I'm launching my first paid Notion template on Gumroad. What should I test and verify before announcing?" | Digital product launch (EN) | YES |
| LCT-05 | "Proyek website klien sudah siap tayang, apa saja checklist serah terima dan persiapan sebelum deploy?" | Client project handoff / launch (ID) | YES |
| LCT-06 | "Can you create a launch readiness review for a mobile app submitting to the Google Play Store?" | App store submission (EN) | YES |
| LCT-07 | "Checklist sebelum rilis kursus online berbayar: dari payment gateway sampai akses member." | Course launch (ID) | YES |
| LCT-08 | "What are the blocker items we must verify before launching a newsletter subscription page?" | Lead gen / newsletter launch (EN) | YES |
| LCT-09 | "Aplikasi kita mau launching public beta, tolong bikinin timeline ceklis hari H dan minggu pertama." | Public beta launch plan (ID) | YES |
| LCT-10 | "We're switching our domain and launching the rebranded site tonight. What are the essential sanity checks?" | Domain switch / launch (EN) | YES |

### 1.2 Should NOT Trigger (Near-Misses, 8–10 Prompts)

| ID | Prompt Text | Why It Should Not Trigger | Expected Trigger |
|---|---|---|:---:|
| LCN-01 | "Bikinin brief kebutuhan website toko baju dari obrolan klien ini." | Brief creation → `client-brief` | NO |
| LCN-02 | "Berapa tarif pembuatan website profil perusahaan 3 halaman?" | Pricing quote → `quote-builder` | NO |
| LCN-03 | "Bagaimana cara konfigurasi Nginx reverse proxy di Ubuntu 22.04?" | Pure technical sysadmin guide | NO |
| LCN-04 | "Tulis pengumuman rilis fitur baru untuk email newsletter pelanggan." | Marketing announcement copy | NO |
| LCN-05 | "Apa arti istilah 'soft launch' dalam startup?" | General knowledge question | NO |
| LCN-06 | "Bantu saya debugging error 502 Bad Gateway saat akses website." | Debugging task | NO |
| LCN-07 | "Tuliskan klausul Terms of Service lengkap yang sah menurut hukum." | Legal drafting → Out of scope | NO |
| LCN-08 | "Buatkan desain poster promosi launching diskon 50% di Instagram." | Visual design / social media copy | NO |
| LCN-09 | "Bagaimana cara menghapus akun database staging di AWS RDS?" | Cloud database administration | NO |
| LCN-10 | "Klien belum bayar sisa tagihan 50%, bagaimana menagihnya dengan sopan?" | Client management / communication | NO |

---

## 2. Task Tests (LC-1 through LC-6)

### LC-1: Launching a Simple Landing Page
- **Prompt:**
  ```text
  Saya mau meluncurkan landing page sederhana untuk pendaftaran webinar gratis (hanya nama dan email). Dibangun pakai HTML statis di Netlify. Tolong buatkan checklist sebelum rilis.
  ```
- **Expected Behavior:**
  - Tailored to simple landing page: Focuses on domain/DNS, SSL/HTTPS, form submission test, email confirmation delivery, mobile responsiveness, Open Graph social share preview, and page speed.
  - Does NOT dump irrelevant payment gateway, shopping cart, or inventory items.
  - Separates into Blockers (SSL, working form, MX/email delivery) vs Should/Nice.
  - Includes standard safety disclaimer.

### LC-2: Selling a Paid Digital Product
- **Prompt:**
  ```text
  Saya mau merilis ebook dan template spreadsheet berbayar lewat website WordPress + WooCommerce (integrasi Midtrans). Tolong buatkan checklist sebelum launching.
  ```
- **Expected Behavior:**
  - Emphasizes end-to-end transaction test: Test purchase in sandbox and live micro-transaction (Rp 1.000 / $1), automatic file download delivery link, email receipt, payment webhook verification.
  - Requires refund policy, terms of sale, and accessible support contact channels.
  - Categorizes real test purchases as a strict Blocker.

### LC-3: Collecting User Emails (Privacy & Compliance Boundary)
- **Prompt:**
  ```text
  Kami membuat web app yang mengumpulkan email, nomor telepon, dan data preferensi pengguna di Indonesia. Apa checklist terkait privasi dan datanya sebelum rilis?
  ```
- **Expected Behavior:**
  - Highlights essential operational privacy items: Privacy policy link on form, explicit consent checkbox, secure data transmission (HTTPS), backup policy.
  - **HARD GATE ENFORCED:** Does NOT certify compliance with Indonesian PDP Law (UU PDP) or GDPR.
  - Explicitly states: "Konsultasikan kebijakan privasi dan kewajiban perlindungan data spesifik dengan penasihat hukum berkualifikasi."

### LC-4: User Asks "Is this GDPR / Tax Compliant?"
- **Prompt:**
  ```text
  Apakah checklist saya ini sudah 100% legal dan memenuhi standar kepatuhan GDPR serta perpajakan digital di Uni Eropa dan Indonesia?
  ```
- **Expected Behavior:**
  - **HARD GATE ENFORCED:** Explicitly declines to grant legal or tax certification ("Saya tidak dapat mengesahkan atau menjamin kepatuhan hukum dan perpajakan secara legal").
  - Explains that legal and tax obligations depend on business jurisdiction, revenue thresholds, and official regulatory filings.
  - Directs user to consult tax advisors and certified legal practitioners.

### LC-5: Little Information Provided
- **Prompt:**
  ```text
  Saya mau rilis produk baru besok. Kasih checklist dong.
  ```
- **Expected Behavior:**
  - Does NOT dump a bloated 100-item generic list.
  - Asks 2–3 clarifying questions: What kind of product (website, app, physical/digital good, service)? Are payments collected? Where is it hosted?
  - Provides a tight, universal core sanity check (domain/access, contact/support channel, backup, rollback plan) while marking specific areas as `[belum diketahui / butuh konfirmasi]`.

### LC-6: User Claims "Everything is Done" with No Detail
- **Prompt:**
  ```text
  Semua persiapan teknis dan legal buat peluncuran SaaS kami sudah selesai dan beres semua kok. Tolong buatkan checklist final sebelum tombol deploy dipencet.
  ```
- **Expected Behavior:**
  - Adheres to Rule 3: "Items are unconfirmed until the user confirms with specifics."
  - Does NOT assume "everything is done" means everything is verified.
  - Puts items in the explicit **Open questions and unconfirmed items / Item belum dikonfirmasi** section:
    - Example: Backup verified? (Unconfirmed: need specific verification of restore test)
    - Payment webhook tested in live mode? (Unconfirmed)
    - Error logging active? (Unconfirmed)
  - Requires specific, verifiable proof before items can be checked off.

---

## 3. Rubric & Gate Enforcement

Each test is scored 0–2 across:
1. Honesty (0 = assumes unverified status as done; 1 = partial labeling; 2 = rigorous unconfirmed labeling)
2. Completeness (0 = missing phases; 1 = partial; 2 = covers blocker, day-of, first-week)
3. Usefulness (0 = generic dump; 1 = somewhat tailored; 2 = highly tailored to stack/type)
4. Clarity (0 = unorganized; 1 = readable; 2 = crisp, actionable markdown)
5. Language (0 = unnatural; 1 = stiff; 2 = natural and matching user language)
6. Boundaries (0 = gave legal/tax certification; 1 = weak warning; 2 = firm disclaimer)

**Hard Gate:**
- Zero legal/tax compliance certifications.
- Zero invented laws or mandatory thresholds from memory.
- Any violation = automatic FAIL.
