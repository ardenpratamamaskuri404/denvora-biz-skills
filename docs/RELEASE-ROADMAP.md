# RELEASE-ROADMAP.md — Peta Rilis Fitur v1.0 → v5.0

Rencana penambahan fitur dan skill untuk rilis jangka panjang. Dokumen ini **bukan janji tanggal**; setiap rilis naik hanya jika gate-nya lulus. Temuan yang harus dibereskan lebih dulu ada di `AUDIT.md`.

Prinsip yang tidak boleh dilanggar di semua rilis:

1. **Zero-invented numbers** — harga, tarif, pajak, statistik, dan testimoni hanya dari pengguna atau placeholder `[ISI: ...]`.
2. **Draft only** — tidak ada nasihat hukum/pajak/keuangan; tidak ada pengiriman pesan, invoice, atau kontrak otomatis.
3. **Markdown + references** — tanpa runtime, tanpa network call, tanpa database di dalam skill.
4. **Bukti sebelum klaim** — skill baru tidak dirilis tanpa test pack, hasil, dan catatan kompatibilitas.
5. **Satu skill, satu tanggung jawab** — hindari skill gemuk yang mencampur brief, harga, hukum, dan operasi.

---

## Ringkasan 5 rilis

| Rilis | Versi | Tema | Fokus utama |
|---|---|---|---|
| Pra-rilis | `v0.2.x` | Proof | Tutup blocker audit, uji 5 skill, dokumen masuk repo |
| 1 | `v1.0.0` | Trust & Proof | Stabilkan 5 skill inti; semua klaim terverifikasi |
| 2 | `v2.0.0` | Win the Client | Discovery, pricing dari biaya sendiri, follow-up, onboarding |
| 3 | `v3.0.0` | Deliver & Protect | Perencanaan proyek, change request, status, UAT, reminder |
| 4 | `v4.0.0` | Grow & Prove | Case study, testimoni etis, launch sequence, content brief |
| 5 | `v5.0.0` | Scale & Ecosystem | Subkontrak, SOP tim, skill SDK, registry, lokalisasi |

---

## Pra-rilis — `v0.2.x` (Proof)

Tidak menambah skill. Semua pekerjaan diambil dari `AUDIT.md`.

- [ ] `docs/` dan paket `dist/` benar-benar masuk repo (B-01, B-02)
- [ ] Test pack + hasil untuk `handover` dan `product-page` (B-03, C-09)
- [ ] Hapus atau buktikan klaim "5 skill 100% verified" dan "Fully Supported" (B-03, B-04)
- [ ] Sinkronkan catalog, PRD, maintenance, contributing, distribution, changelog (C-02…C-05)
- [ ] `SECURITY.md` diisi SLA nyata (B-05)
- [ ] CI: cek `version:`, jalankan verify lintas OS (B-07, B-08)
- [ ] Beta 5–10 freelancer + review hukum oleh manusia

**Gate:** tidak ada klaim tanpa bukti; `main` bersih; `v0.1.1`/`v0.2.0` bisa dirilis.

---

## Rilis 1 — `v1.0.0` · "Trust & Proof"

**Tujuan:** 5 skill inti menjadi produk yang jujur, stabil, dan bisa direkomendasikan tanpa caveat.

**Skill:** tidak ada skill baru. Hardening `client-brief`, `quote-builder`, `launch-checklist`, `handover`, `product-page`.

**Fitur platform**
- Test harness lengkap: trigger, task, boundary, language, injection untuk 5 skill.
- Tabel hasil trigger (should / should-not) yang direkam, bukan hanya task test.
- Version sync: versi skill, README, CHANGELOG, dan tag harus cocok.
- Compatibility matrix jujur (hanya tool yang benar-benar diuji).
- Contoh output fiktif untuk 5 skill (brief, quote, checklist, handover, product page).
- Glosarium istilah ID/EN agar output konsisten (`DP`, `termin`, `revisi`, `scope`).

**Exit criteria**
- 0 pelanggaran hard gate di semua test.
- Beta feedback terkumpul dan ditindaklanjuti.
- Review profesional untuk wording legal-adjacent selesai.
- Fresh install berhasil di minimal 2 agent berbeda.

---

## Rilis 2 — `v2.0.0` · "Win the Client"

**Tujuan:** menutup fase sebelum proyek dimulai — discovery, penetapan harga, follow-up, dan onboarding.

**Skill baru**

| Skill | Fungsi | Pemicu (contoh) | Batasan |
|---|---|---|---|
| `discovery-call` | Ubah catatan/transkrip call menjadi kebutuhan, sinyal budget, peta pengambil keputusan, dan next step | "catatan meeting klien", "discovery call", "hasil telepon klien" | Tidak mengarang budget; tidak menyimpulkan fakta yang tidak diucapkan |
| `pricing-strategy` | Hitung tarif/paket dari **biaya, jam, target income, dan kapasitas pengguna** | "berapa tarif saya", "hitung rate", "pricing paket" | Tidak memberi harga pasar; tidak mengarang biaya; semua angka dari pengguna |
| `proposal-followup` | Draf follow-up sopan, objection handling, dan batas negosiasi | "follow up penawaran", "klien belum balas", "cara nego" | Tidak menekan klien; tidak menjanjikan diskon |
| `client-onboarding` | Welcome pack, agenda kickoff, checklist aset, aturan komunikasi | "onboarding klien baru", "kickoff project", "welcome pack" | Tidak menagih/mengirim otomatis; tanpa data sensitif |

**Fitur platform**
- **Bundles/profiles:** "Freelancer Starter" (brief → pricing → quote) dan "Agency Pack" (discovery → onboarding → plan).
- **Workflow recipes:** urutan skill yang direkomendasikan, mis. `client-brief → pricing-strategy → quote-builder → proposal-followup`.
- **Eval harness v2:** skor per kriteria, snapshot regresi, dan pembanding with/without.
- **Trigger routing:** panduan kapan satu skill berhenti dan skill lain mengambil alih.

**Exit criteria**
- Setiap skill baru punya trigger set (8–10 should / 8–10 should-not) + task test.
- Tidak ada skill yang memberi angka tanpa sumber.
- Bundles teruji end-to-end pada satu skenario fiktif.

---

## Rilis 3 — `v3.0.0` · "Deliver & Protect"

**Tujuan:** menjaga proyek tetap terkendali setelah deal — scope, perubahan, status, penerimaan, dan pembayaran.

**Skill baru**

| Skill | Fungsi | Pemicu (contoh) | Batasan |
|---|---|---|---|
| `project-plan` | Milestone, dependency, RACI, risk register, dan rencana komunikasi | "buat project plan", "timeline proyek", "rencana kerja" | Estimasi dari pengguna; tidak menjanjikan tanggal |
| `change-request` | Change order: dampak scope, waktu, dan biaya | "klien minta tambahan", "change request", "scope berubah" | Tidak menetapkan harga sendiri; minta angka pengguna |
| `status-update` | Update mingguan, decision log, dan risk log untuk klien | "update klien", "progress report", "status proyek" | Tidak mengarang progres; hanya dari input pengguna |
| `uat-acceptance` | Kriteria penerimaan, skrip UAT, triage bug, dan sign-off | "UAT", "acceptance test", "serah terima tahap" | Tidak menyatakan "lulus" tanpa bukti pengujian |
| `payment-reminder` | Draf pengingat pembayaran dan eskalasi sopan | "tagih invoice", "reminder pembayaran", "klien telat bayar" | Bukan akuntansi; tidak menghitung denda/pajak; draft only |

**Fitur platform**
- **Project artifact chain:** konvensi ID dan tautan antar dokumen (`brief → plan → change log → status → UAT → handover`).
- **Glosarium proyek:** istilah status, severity bug, dan definisi "done".
- **Mode keluaran:** ringkas / standar / detail untuk klien teknis vs non-teknis.
- **Lokalisasi ID-first** untuk istilah operasional (bukan aturan pajak/hukum).

**Exit criteria**
- Rantai dokumen bisa dijalankan pada satu proyek fiktif dari brief sampai handover.
- Tidak ada skill yang memberi saran hukum/pajak.
- Test boundary untuk "ubah scope", "telat bayar", dan "bug kritis" lulus.

---

## Rilis 4 — `v4.0.0` · "Grow & Prove"

**Tujuan:** mengubah pekerjaan yang selesai menjadi bukti sosial dan pemasaran yang jujur.

**Skill baru**

| Skill | Fungsi | Pemicu (contoh) | Batasan |
|---|---|---|---|
| `case-study` | Ubah proyek selesai menjadi case study anonim | "buat case study", "portfolio proyek", "studi kasus" | Tanpa data klien nyata; tanpa metrik karangan |
| `testimonial-request` | Minta testimoni secara etis + alur consent | "minta testimoni", "testimonial klien" | Tidak memalsukan review; tidak menulis testimoni atas nama klien |
| `launch-sequence` | Draf urutan konten/email pra-rilis | "launch sequence", "email rilis", "promo peluncuran" | Tidak mengirim; tanpa klaim "guaranteed revenue" |
| `content-brief` | Brief konten/SEO dari riset yang diberikan pengguna | "content brief", "brief artikel", "SEO brief" | Tidak mengarang volume pencarian/keyword; data harus dari pengguna |
| `analytics-review` | Baca angka analytics yang diberikan pengguna dan tarik insight | "review analytics", "baca metrik", "laporan traffic" | Tidak mengarang benchmark; tandai ketidakpastian |

**Fitur platform**
- **Industry packs:** web dev, design, writing, video, agency operations.
- **Style modes:** formal, casual, dan "client-ready" dengan nada yang konsisten.
- **Public eval benchmark:** hasil test yang bisa direproduksi dan dibandingkan antar versi.
- **Anti-fake-proof lint:** deteksi klaim testimoni/statistik tanpa sumber di output.

**Exit criteria**
- Semua skill baru lulus hard gate "no fake proof".
- Benchmark publik dirilis bersama catatan metodologi.
- Tidak ada output yang menjanjikan hasil finansial.

---

## Rilis 5 — `v5.0.0` · "Scale & Ecosystem"

**Tujuan:** membuat skill bisa dipakai tim, dilokalkan, dan diperluas komunitas tanpa mengorbankan aturan keamanan.

**Skill baru**

| Skill | Fungsi | Pemicu (contoh) | Batasan |
|---|---|---|---|
| `subcontract-brief` | Brief/SoW untuk subkontraktor dari scope proyek | "brief freelancer", "subkontrak", "brief vendor" | Tanpa data sensitif; tanpa klausul hukum final |
| `team-sop` | Bangun SOP agensi: peran, handoff, kualitas, eskalasi | "SOP tim", "alur kerja agensi", "proses internal" | Tidak menetapkan aturan hukum/HR |
| `client-portal-spec` | Spesifikasi status page/portal klien (bukan kode) | "spesifikasi portal klien", "status page" | Tanpa runtime/network; hanya spesifikasi |
| `skill-authoring-kit` | Meta-skill untuk membuat, menguji, dan merilis skill baru | "buat skill baru", "authoring skill" | Wajib mengikuti `LEGAL-SAFETY.md` dan gate test |
| `localize-skill` | Adaptasi skill ke bahasa/pasar lain | "lokalisasi skill", "versi bahasa Indonesia" | Hanya fakta terverifikasi; tanpa aturan pajak/hukum dari memori |

**Fitur platform**
- **Skill SDK/manifest:** metadata terstruktur (nama, versi, trigger, dependency, batasan) tanpa runtime di skill.
- **Dependency graph & conflict check:** deteksi skill yang saling bertabrakan trigger-nya.
- **Community registry/catalog:** daftar skill komunitas dengan status verifikasi yang jelas.
- **Expanded compatibility matrix:** versi agent yang benar-benar diuji + catatan perilaku.
- **Paid packs & workshops:** layanan/kustomisasi (bukan fitur skill), terhubung ke Denvora store.

**Exit criteria**
- SDK dan template skill baru lulus validator yang sama.
- Registry menampilkan status "tested" vs "untested" secara jujur.
- Semua skill tetap Markdown-only dan bebas runtime.

---

## Backlog ide (belum dijadwalkan)

Ide yang masuk akal tetapi belum punya bukti kebutuhan atau belum aman dirilis:

- `contract-checklist` — hanya daftar hal yang perlu ditinjau profesional, **bukan** template kontrak siap tanda tangan.
- `rate-card-builder` — kartu tarif dari angka pengguna (bisa digabung ke `pricing-strategy`).
- `meeting-notes` — catatan rapat generik (risiko tumpang tindih dengan `discovery-call`).
- `proposal-deck-outline` — kerangka slide proposal (teks saja).
- `retainer-planner` — rencana retainer dari kapasitas dan angka pengguna.
- `handover-audit` — audit kesiapan handover sebelum dokumen final.
- `accessibility-checklist` — bisa menjadi area tambahan di `launch-checklist`.
- `localization-id` — paket referensi Indonesia (klien UMKM, termin, DP) tanpa angka pajak.

## Non-goals permanen

- Nasihat atau sertifikasi hukum, pajak, akuntansi, dan keuangan.
- Template kontrak yang dipresentasikan "aman ditandatangani".
- Faktur, pembukuan, atau sistem akuntansi.
- Mengirim pesan/email/invoice atau menghubungi klien otomatis.
- Database harga pasar, benchmark industri, atau statistik tanpa sumber.
- Runtime, script, network call, atau integrasi eksternal **di dalam** skill.

## Aturan rilis

- **Semver:** `vX.Y.Z`. Perubahan format output atau nama skill = major setelah v1.0.
- **Gate wajib per rilis:** test pack + hasil, kompatibilitas jujur, CHANGELOG, dan migrasi untuk perubahan besar.
- **Deprecation:** skill yang diganti diberi status deprecated minimal satu minor release sebelum dihapus.
- **Evidence:** setiap centang di roadmap harus punya tautan ke test log, CI run, atau release.
- **Satu rilis, satu tema:** jangan campur fitur baru dengan refactor besar.
