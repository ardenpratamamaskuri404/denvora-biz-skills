# Contoh Output: `handover`

*Contoh kasus fiktif: Serah terima website e-commerce dan katalog produk PT Batik Nusantara Yogyakarta.*

---

# Berita Acara Serah Terima Proyek (Project Handover)

| Dokumen | Detil Informasi |
|---|---|
| **Judul Proyek** | Website E-Commerce & Katalog PT Batik Nusantara |
| **Klien** | PT Batik Nusantara (Ibu Citra Dewi / PIC) |
| **Pelaksana / Agensi** | Studio Digital Pratama (Arden Pratama Maskuri) |
| **Tanggal Serah Terima** | 15 November 2026 |
| **Status Pekerjaan** | Selesai & Dideploy ke Production (`batiknusantara.com`) |

---

## 1. Ringkasan Eksekutif

Pekerjaan perancangan dan pembangunan sistem website e-commerce untuk **PT Batik Nusantara** telah selesai dikerjakan sesuai cakupan kerja yang disepakati. Sistem telah melalui tahap pengujian fungsional (*User Acceptance Testing*) dan telah tayang resmi di domain produksi. Dokumen ini merangkum serah terima seluruh aset, repositori kode, akun pihak ketiga, serta panduan operasional dan batasan garansi pemeliharaan.

---

## 2. Daftar Aset & Hasil Pekerjaan (Deliverables)

Semua aset berikut telah diserahkan dan dapat diakses penuh oleh pihak klien:

| No | Komponen Aset | Bentuk Penyerahan | Lokasi / Tautan | Status |
|:---:|---|---|---|:---:|
| 1 | **Kode Sumber (Source Code)** | Git Repository Organisasi | `https://github.com/batiknusantara/storefront` | ✅ Diterima |
| 2 | **Desain UI/UX & Prototipe** | File Figma (View & Edit) | `https://figma.com/file/batik-nusantara-design` | ✅ Diterima |
| 3 | **Database & Aset Media** | Snapshot dump SQL & Cloud Storage | S3 Bucket: `batiknusantara-assets` | ✅ Diterima |
| 4 | **Domain & DNS Management** | Transfer Kepemilikan Akun | Cloudflare: `batiknusantara.com` | ✅ Diterima |
| 5 | **Payment Gateway** | Akun Merchant Midtrans Production | Dashboard Midtrans Merchant | ✅ Diterima |
| 6 | **Dokumentasi Pengguna** | Panduan Video & PDF untuk Admin | `docs/panduan-admin-katalog.pdf` | ✅ Diterima |

---

## 3. Protokol Penyerahan Kredensial & Keamanan

> ⚠️ **Catatan Keamanan:** Demi menjaga integritas data dan keamanan sistem, kata sandi akun **tidak pernah dikirimkan dalam format teks terbuka (plaintext)** via WhatsApp atau email umum.

1. **Pengelola Kata Sandi:** Kredensial administratif dibagikan via tautan terenkripsi sekali pakai (*1Password Secure Share* / *Bitwarden Send*).
2. **Kewajiban Rotasi Sandi:** Pihak klien diwajibkan untuk segera mengganti kata sandi master dan memperbarui kunci API (*API keys*) produksi setelah menerima akses.
3. **Pencabutan Akses Agensi:** Akun sementara pengembang agensi telah diturunkan menjadi peran *viewer* atau dicabut per tanggal serah terima ini.

---

## 4. Tautan Operasional & Pengelolaan

- **Website Publik:** `https://batiknusantara.com`
- **Dashboard Admin Toko:** `https://batiknusantara.com/admin`
- **Panel Hosting / Server:** VPS Ubuntu via RunCloud / Portainer
- **Layanan Pemantauan Uptime:** UptimeRobot Dashboard (Status: 99.9% Uptime)

---

## 5. Batasan Garansi & Layanan Pemeliharaan (Maintenance Boundaries)

Untuk menjaga kejelasan kerja sama pasca peluncuran, ketentuan dukungan disepakati sebagai berikut:

1. **Masa Garansi Bug (30 Hari Kalender):** Berlaku sejak tanggal 16 November 2026 hingga 15 Desember 2026.
   - **Termasuk dalam garansi:** Perbaikan galat (bug fixes) pada fitur yang telah disepakati dalam dokumen brief/spesifikasi awal tanpa pungutan biaya tambahan.
   - **SLA Tanggapan:** Keluhan perbaikan direspons maksimal 1 x 24 jam hari kerja.
2. **Di Luar Cakupan Garansi (Out-of-Scope):**
   - Penambahan halaman baru, perombakan desain alur checkout, atau penambahan payment gateway baru.
   - Kerusakan akibat modifikasi kode langsung oleh pihak ketiga tanpa persetujuan pengembang.
   - Gangguan layanan eksternal di luar kendali pengembang (down-time server hosting atau gangguan jaringan perbankan).
3. **Pengembangan Lanjutan:** Permintaan fitur baru akan dituangkan dalam penawaran kerja terpisah (*Change Request / New SOW*).

---

## 6. Pernyataan Persetujuan & Tanda Tangan (Sign-Off)

Dengan ditandatanganinya berita acara ini, Klien menyatakan bahwa pekerjaan telah diterima dengan baik sesuai spesifikasi, dan menyetujui pencairan pembayaran termin akhir (*final invoice*).

```text
Diserahkan oleh,                          Diterima dan Disetujui oleh,
Studio Digital Pratama                    PT Batik Nusantara



( Arden Pratama Maskuri )                 ( Citra Dewi )
Lead Developer                            Direktur Operasional
Tanggal: 15 November 2026                 Tanggal: 15 November 2026
```

> *Catatan: Dokumen ini merupakan draf operasional bisnis standar. Untuk klausul pengalihan hak kekayaan intelektual (HAKI) resmi bersertifikasi hukum, disarankan untuk ditinjau oleh konsultan hukum masing-masing pihak.*
