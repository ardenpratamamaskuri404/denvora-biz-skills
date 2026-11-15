# Contoh Output: `client-brief`

*Contoh kasus fiktif: Klien UMKM kerajinan kulit meminta pembuatan website toko online.*

---

## 1. Ringkasan
Klien (Batik & Kulit Nusantara, Yogyakarta) membutuhkan website e-commerce untuk memamerkan katalog produk kerajinan kulit dan menerima pesanan daring dengan pembayaran transfer bank serta QRIS. Target peluncuran diharapkan sebelum pameran dagang regional akhir bulan depan.

## 2. Brief Proyek
- **Tujuan:** Memperluas jangkauan penjualan produk kerajinan kulit ke luar kota secara mandiri tanpa bergantung penuh pada marketplace pihak ketiga.
- **Audiens Sasaran:** Pembeli retail dan pemesan kustom (souvenir perusahaan) usia 25–45 tahun.
- **Deliverables:**
  - Halaman Beranda (Hero section, USP, kategori unggulan).
  - Halaman Katalog Produk dengan filter kategori.
  - Halaman Detail Produk (galeri foto, deskripsi spesifikasi bahan).
  - Alur Checkout sederhana (Form data pemesan + integrasi QRIS / transfer manual).
  - Halaman Kontak & FAQ pemesanan.
- **Batasan (Constraints):** Waktu pengerjaan sekitar 4 minggu sebelum pameran; tim internal klien non-teknis membutuhkan dashboard admin yang mudah dioperasikan.
- **Sinyal Anggaran:** `[belum diketahui / fleksibel hemat]` (Klien belum menyebutkan nominal pasti).
- **Kriteria Sukses:** Website dapat diakses cepat di smartphone dan checkout pesanan terkirim otomatis ke WhatsApp/Email admin.

## 3. Cakupan Kerja yang Diusulkan (Proposed Scope)
- **Termasuk (In-Scope):**
  - Desain UI/UX responsif (Mobile & Desktop).
  - Implementasi CMS (Content Management System) katalog produk.
  - Setup gateway pembayaran QRIS & rekening bank transfer.
  - Integrasi kalkulator ongkos kirim standar (JNE / J&T).
  - Panduan video singkat operasional input produk untuk admin.
- **Tidak Termasuk (Out-of-Scope / Diusulkan untuk Fase Berikutnya):**
  - Integrasi sistem POS (Point of Sale) kasir toko fisik.
  - Fitur multi-gudang (multi-warehouse) dan sistem retur otomatis.
  - Pengadaan konten (foto produk resolusi tinggi dan penulisan copywriting disediakan oleh klien).

## 4. Asumsi Kerja
- A-01: Klien telah memiliki materi logo dan foto produk beresolusi layak pakai.
- A-02: Akun merchant QRIS (misal: Midtrans/Xendit) didaftarkan atas nama legal bisnis klien.
- A-03: Klien menunjuk 1 orang perwakilan tetap (PIC) untuk proses peninjauan dan persetujuan.

## 5. Risiko dan Red Flags
- **Risiko Jadwal Ketat:** Target 4 minggu sebelum pameran rawan meleset jika klien terlambat mengirimkan foto dan deskripsi katalog produk.
- **Risiko Administrasi Pembayaran:** Verifikasi akun payment gateway bisnis terkadang membutuhkan waktu 3–7 hari kerja dari pihak penyedia.

## 6. Pertanyaan Kunci untuk Klien
### Prioritas Utama (Blocking - Menentukan Penawaran Harga):
1. Berapa perkiraan jumlah SKU / varian produk awal yang akan dimasukkan ke katalog saat peluncuran?
2. Apakah foto produk dan deskripsi harga sudah siap, atau membutuhkan bantuan sesi fotografi & penulisan?
3. Apakah sudah memiliki domain dan hosting sendiri, atau perlu disiapkan dalam paket?

### Prioritas Tambahan (Nice-to-Have):
4. Apakah ada contoh website referensi yang disukai dari segi tampilan atau navigasi?
5. Apakah ada kebutuhan integrasi akun media sosial (Instagram feed) di halaman utama?

## 7. Draf Pesan Balasan ke Klien
```text
Halo Mas/Mbak [Nama Klien],

Terima kasih banyak sudah menghubungi kami untuk rencana pembuatan website toko online Batik & Kulit Nusantara. 
Kami sudah mempelajari kebutuhan awal Anda dan melihat potensi yang sangat bagus untuk persiapan pameran bulan depan.

Agar kami dapat menyusun estimasi waktu kerja dan proposal biaya yang paling efisien, bolehkah kami menanyakan 3 hal singkat berikut?
1. Kira-kira ada berapa jenis produk yang ingin ditampilkan saat peluncuran nanti?
2. Apakah materi foto dan deskripsi produknya saat ini sudah lengkap?
3. Apakah bisnis Anda sudah memiliki akun domain atau akun payment gateway sebelumnya?

Setelah 3 info di atas kami terima, kami akan langsung kirimkan rincian draf penawaran resminya ya. Terima kasih!
```

## 8. Catatan Keamanan
> **Catatan Penting:** Brief ini merupakan draf kerja untuk memetakan kebutuhan proyek dan **bukan kontrak atau dokumen hukum mengikat**. Pastikan cakupan final disepakati bersama klien secara tertulis.

## 9. Langkah Selanjutnya
Kirim draf pesan di atas kepada klien. Setelah informasi jumlah produk dan kesiapan materi terjawab, gunakan skill `quote-builder` untuk merumuskan penawaran harga resmi.
