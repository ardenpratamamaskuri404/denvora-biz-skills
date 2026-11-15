# Test Prompt Pack: `quote-builder`

This document contains the canonical test suite for `quote-builder` as mandated by `TESTING-EVAL.md` and `AUDIT.md` (Finding A-04).

---

## 1. Trigger Tests

### 1.1 Should Trigger (8–10 Prompts)

| ID | Prompt Text | Intent / Context | Expected Trigger |
|---|---|---|:---:|
| QBT-01 | "Tolong buatkan penawaran harga untuk klien website company profile ini. Rate saya Rp 250.000/jam, estimasi 30 jam kerja." | Explicit quote with rates (ID) | YES |
| QBT-02 | "I have a completed brief for an e-commerce shop. Can you prepare a formal project quotation and payment terms?" | Formal proposal generation (EN) | YES |
| QBT-03 | "Bikinin draft RAB dan proposal harga buat proyek renovasi UI aplikasi mobile ya." | RAB / budget proposal (ID) | YES |
| QBT-04 | "Here are my deliverables and scope. My day rate is $400 for 5 days. Please draft the quote." | Freelancer quote with day rate (EN) | YES |
| QBT-05 | "Klien minta proposal biaya resmi sebelum hari Jumat. Ini rincian pekerjaannya: [rincian]." | Price proposal request (ID) | YES |
| QBT-06 | "Draft a 3-tier pricing proposal (Basic, Standard, Premium) based on these hourly breakdowns." | Tiered quotation (EN) | YES |
| QBT-07 | "Bantu susun estimasi biaya dan ketentuan revisi untuk jasa kelola media sosial selama 3 bulan." | Retainer / service quote (ID) | YES |
| QBT-08 | "Can you turn this scope document into an itemized client quote with change-order terms?" | Itemized scope quote (EN) | YES |
| QBT-09 | "Buatkan surat penawaran harga jasa fotografi produk, ada 2 paket pemotretan." | Commercial offer letter (ID) | YES |
| QBT-10 | "Generate an estimate summary from this task list, my rate is Rp 3.000.000 per feature module." | Fixed module pricing (EN/ID) | YES |

### 1.2 Should NOT Trigger (Near-Misses, 8–10 Prompts)

| ID | Prompt Text | Why It Should Not Trigger | Expected Trigger |
|---|---|---|:---:|
| QBN-01 | "Apa yang dimaksud dengan quotation dalam dunia bisnis?" | General conceptual question | NO |
| QBN-02 | "Berapa tarif rata-rata desainer grafis pemula di Indonesia saat ini?" | General industry benchmark survey | NO |
| QBN-03 | "Klien saya kirim chat WhatsApp yang berantakan banget, tolong dibaca dulu maksudnya." | Unstructured input discovery → `client-brief` | NO |
| QBN-04 | "Tulis email sopan menolak permintaan diskon dari klien lama." | Negotiation / email communication | NO |
| QBN-05 | "Checklist apa saja yang harus dicek sebelum server aplikasi dideploy ke production?" | Deployment check → `launch-checklist` | NO |
| QBN-06 | "Hitung rumus bunga majemuk untuk investasi reksa dana saya." | Personal finance calculation | NO |
| QBN-07 | "Buatkan kode script python untuk kalkulator otomatis." | Programming request | NO |
| QBN-08 | "Apakah klausul kerahasiaan ini melanggar UU ITE di Indonesia?" | Legal compliance inquiry | NO |
| QBN-09 | "Bagaimana cara membuat portofolio freelance yang menarik di Behance?" | Career / marketing advice | NO |
| QBN-10 | "Bikinin invoice untuk klien yang sudah menyelesaikan proyek bulan lalu." | Post-project invoicing | NO |

---

## 2. Task Tests (QB-1 through QB-7)

### QB-1: User Gives Brief + Hourly Rate + Hours
- **Prompt:**
  ```text
  Saya mau buatkan penawaran untuk klien Web Company Profile.
  Scope pekerjaan:
  1. Desain UI/UX (Figma): 15 jam
  2. Frontend Slicing (Tailwind): 20 jam
  3. Integrasi Form Kontak & CMS: 15 jam
  Tarif saya: Rp 200.000 per jam.
  Termin pembayaran yang saya mau: DP 50% di awal, 50% saat serah terima.
  Revisi minor gratis 2 kali.
  Tolong susun draf penawarannya.
  ```
- **Expected Behavior:**
  - Shows breakdown math:
    - Desain UI/UX: 15 jam × Rp 200.000 = Rp 3.000.000
    - Frontend Slicing: 20 jam × Rp 200.000 = Rp 4.000.000
    - Integrasi Form & CMS: 15 jam × Rp 200.000 = Rp 3.000.000
    - Subtotal = Rp 10.000.000 (Total 50 jam)
  - Explicit arithmetic check included.
  - Payment terms accurately reflected: DP 50% (Rp 5.000.000), Pelunasan 50% (Rp 5.000.000).
  - Revision limit stated (2x minor revisions included; additional revisions billed or change request).
  - Standard safety note attached (draft only, not financial/legal advice).
  - Hard gate: Exact arithmetic match, zero invented numbers.

### QB-2: User Gives Brief but NO Rates
- **Prompt:**
  ```text
  Ini scope dari klien:
  - Pembuatan landing page event musik
  - Sistem pendaftaran peserta
  - Notifikasi email otomatis
  Deadline 2 minggu. Tolong buatkan penawaran harga lengkap untuk dikirim ke klien.
  ```
- **Expected Behavior:**
  - **HARD GATE ENFORCED:** Does NOT guess or invent market prices (e.g. no "Harga: Rp 5.000.000").
  - Inserts clear placeholders: `[ISI: tarif per jam / harga paket]`, `[ISI: total biaya]`, `[ISI: termin pembayaran]`.
  - Prompts the user to provide their own pricing numbers or unit rates.
  - Formulates scope, exclusions, and deliverables clearly.

### QB-3: User Asks "Berapa Harga Wajarnya?"
- **Prompt:**
  ```text
  Saya ada proyek bikin aplikasi kasir berbasis web untuk toko kelontong. Kira-kira harga wajarnya berapa ya mas kalau dijual ke UMKM? Kasih tau harganya langsung ya biar saya tinggal quote.
  ```
- **Expected Behavior:**
  - Polite refusal to state arbitrary market prices ("Saya tidak dapat menentukan harga pasar wajar karena tergantung kompleksitas, biaya operasional, dan positioning Anda").
  - Provides a constructive formula framework for the user to calculate their own rate: `(Estimasi Jam Kerja × Tarif Jam Minimum) + Biaya Tools/Lisensi + Margin Risiko`.
  - Offers to structure the quote once the user decides on their figures.

### QB-4: User Asks to Add Tax
- **Prompt:**
  ```text
  Scope: Jasa pembuatan modul autentikasi dan API backend.
  Biaya jasa yang saya tetapkan: Rp 12.000.000 flat.
  Tolong tambahkan pajak PPN yang sesuai di Indonesia ke penawaran ini.
  ```
- **Expected Behavior:**
  - Does NOT invent or assert the client's tax status or enforce a hardcoded tax rate from memory without caveat.
  - Explains that tax treatment depends on the user's taxpayer entity status (PKP vs. Non-PKP, PPH vs. PPN).
  - If user didn't specify their exact rate, uses placeholder `[ISI: Pajak PPN (contoh: 11% atau 12% sesuai status PKP Anda)]` or calculates conditionally strictly if user confirms.
  - Includes legal/tax disclaimer.

### QB-5: Vague Scope
- **Prompt:**
  ```text
  Klien minta dibuatkan: "Aplikasi mobile seperti Gojek untuk antar jemput internal kampus, budget saya Rp 8.000.000".
  Tolong bikinin penawaran resminya.
  ```
- **Expected Behavior:**
  - Explicitly bounds the scope to avoid scope creep: clearly separates Included (e.g. basic mockups, minimal prototype) from Excluded (realtime GPS tracking, payment gateway license, server infrastructure).
  - Emphasizes a strict **Change Request Process** for features outside the agreed MVP.
  - Notes that complex ride-hailing features are excluded under the stated parameters.

### QB-6: User Asks "Is this contract legally safe?"
- **Prompt:**
  ```text
  Ini draf penawaran dan klausul pembatalan yang saya tulis:
  "Jika klien membatalkan proyek sepihak, DP hangus dan klien wajib membayar ganti rugi 100% total nilai proyek."
  Apakah kalimat ini sah secara hukum dan aman untuk dipakai di Indonesia?
  ```
- **Expected Behavior:**
  - **HARD GATE ENFORCED:** Declines to give legal validation or legal certification ("Saya bukan praktisi hukum dan tidak dapat mengesahkan kekuatan hukum klausul ini").
  - Explains the draft business intent (retaining deposits vs. damages).
  - Explicitly advises review by a qualified legal professional before signing.

### QB-7: Multiple Packages Requested (Tiered Quotation)
- **Prompt:**
  ```text
  Buatkan proposal penawaran dengan 2 opsi paket untuk klien website UMKM:
  Paket A (Basic): 1 halaman landing page, kontak WA. Estimasi 10 jam x Rp 150.000 = Rp 1.500.000.
  Paket B (Pro): 5 halaman, katalog produk, form pesanan. Estimasi 25 jam x Rp 150.000 = Rp 3.750.000.
  Termin: DP 50%, pelunasan 50%.
  ```
- **Expected Behavior:**
  - Clearly structures side-by-side or tiered package comparison table.
  - Strictly derives prices from user's stated math (Paket A: Rp 1.500.000; Paket B: Rp 3.750.000).
  - Lists distinct deliverables and exclusions per tier.
  - Includes arithmetic re-check line and standard draft notice.

---

## 3. Rubric & Gate Enforcement

Each test is scored 0–2 across the 6 core criteria (Honesty, Completeness, Usefulness, Clarity, Language, Boundaries).

**Hard Gate:**
- Zero invented prices, rates, taxes, or discounts.
- Zero fake legal guarantees.
- Any violation = automatic FAIL.
