# Contoh Output: `launch-checklist`

*Contoh kasus fiktif: Peluncuran website e-commerce produk digital (template & ebook).*

---

# PRE-LAUNCH READINESS CHECKLIST

**Tipe Peluncuran:** Penjualan produk digital (E-book + Template Notion) melalui website WooCommerce terintegrasi Midtrans Payment Gateway.  
**Asumsi:** Hosting berbasis VPS Ubuntu/Nginx, domain aktif dengan sertifikat SSL Cloudflare/Let's Encrypt.  

---

## 1. Blocker (Wajib Diverifikasi Sebelum Buka Akses Publik)

- [ ] **Transaksi Uji Coba Nyata (Live Payment Test):** Lakukan 1 transaksi riil senilai minimal (misal Rp 10.000) menggunakan akun pembayaran pengguna biasa untuk memastikan webhook Midtrans sukses mengubah status order menjadi *Completed*.  
  *Alasan: Kegagalan webhook menyebabkan pembeli sukses bayar tapi akses produk tidak terbuka otomatis.*
- [ ] **Akses Pengiriman Otomatis (Asset Delivery Link):** Pastikan link unduh file PDF dan duplikasi template Notion terkirim ke email pembeli dan dapat diunduh tanpa kendala izin akses.  
  *Alasan: Pengalaman pertama pembeli yang gagal mengakses produk langsung memicu komplain dan refund.*
- [ ] **HTTPS & Sertifikat SSL:** Verifikasi seluruh URL halaman checkout dan aset termuat dengan protokol `https://` tanpa *mixed content warning*.  
  *Alasan: Browser modern akan memblokir submit form jika ada peringatan keamanan koneksi.*
- [ ] **Halaman Kebijakan Pengembalian Dana & Syarat Layanan (Terms & Refund):** Tersedia link halaman syarat ketentuan dan aturan refund yang jelas di footer serta checkbox persetujuan di alur checkout.  
  *Alasan: Syarat wajib dari penyedia payment gateway dan perlindungan hukum dasar bila ada sengketa.*

---

## 2. Should (Sangat Disarankan Sebelum Hari-H)

- [ ] **Email Transaksional DKIM & SPF:** Uji pengiriman email tanda terima belanja ke Gmail dan Yahoo untuk memastikan tidak masuk ke folder SPAM.  
  *Alasan: Jika email invoice masuk spam, pelanggan merasa tertipu dan mengira transaksi gagal.*
- [ ] **Responsif Perangkat Seluler (Mobile UX):** Tes alur belanja mulai dari memilih produk hingga scan QRIS langsung dari smartphone layar 360px–414px.  
  *Alasan: Lebih dari 70% transaksi ritel digital Indonesia terjadi melalui perangkat mobile.*
- [ ] **Kecepatan Muat Halaman (PageSpeed Optimization):** Optimasi gambar thumbnail produk ke format WebP; skor mobile minimal di atas 70 di Google PageSpeed Insights.  
  *Alasan: Halaman yang lambat meningkatkan tingkat drop-off pengunjung sebelum mencapai form bayar.*
- [ ] **Saluran Bantuan Pelanggan (Support Contact):** Tombol bantuan WhatsApp atau email support terlihat jelas di footer dan invoice.  
  *Alasan: Memudahkan pembeli berkonsultasi cepat bila ada kendala teknis saat mengunduh.*

---

## 3. Nice to Have (Optimalisasi Lanjutan)

- [ ] **Meta Tag & Open Graph Preview:** Cek tampilan preview URL saat link dibagikan di WhatsApp, Telegram, dan Twitter (gambar banner dan deskripsi muncul rapi).  
- [ ] **Pelacakan Analitik & Konversi:** Verifikasi Google Analytics 4 (GA4) dan Meta Pixel merekam event *Purchase*.  
- [ ] **Kupon Diskon Early Bird:** Pastikan kode promo peluncuran berfungsi dan memiliki batas kuota yang valid.  

---

## 4. Jadwal Pelaksanaan (Timeline)

### Hari Peluncuran (Launch Day):
1. Aktifkan mode publik (matikan status *Maintenance Mode*).
2. Lakukan 1 kali pemesanan monitoring langsung di server production.
3. Pantau log server dan dashboard payment gateway selama 2 jam pertama pengumuman.

### Evaluasi Minggu Pertama (First Week):
1. Rekap rasio keberhasilan transaksi vs pembayaran kedaluwarsa (expired payments).
2. Tinjau pertanyaan pembeli yang masuk ke support untuk memperbaiki panduan FAQ produk.
3. Buat backup database cadangan mingguan pertama pasca-transaksi.

---

## 5. Pertanyaan Terbuka & Item Belum Dikonfirmasi (Unconfirmed Items)

- [ ] *[Belum Terkonfirmasi]* Uji beban server bila terjadi lonjakan trafik bersamaan saat promosi dibuka di media sosial.
- [ ] *[Belum Terkonfirmasi]* Ketentuan penerbitan faktur pajak jika ada pembeli instansi/perusahaan yang membutuhkan NPWP penjual.

---

> **Catatan Penting:** Daftar periksa ini menunjukkan hal-hal yang perlu diverifikasi dan **bukan nasihat hukum, pajak, atau kepatuhan regulasi profesional**. Periksa kewajiban dan aturan resmi yang berlaku untuk bisnis Anda bersama profesional yang berkualifikasi.

## 6. Langkah Selanjutnya
Lakukan pengujian blocker nomor 1 dan 2 (transaksi nyata dan verifikasi pengiriman file). Setelah keduanya terkonfirmasi berhasil, centang item tersebut dan lanjutkan jadwal pengumuman publik.
