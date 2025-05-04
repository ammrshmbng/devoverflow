# Intercepting Routes di Next.js App Router

Intercepting Routes adalah fitur di Next.js yang memungkinkan kita untuk "menginterupsi" atau "mengintersepsi" rute normal dan menampilkan konten dari rute lain sambil tetap berada di halaman yang sama. Ini sangat berguna untuk membuat pengalaman pengguna yang lebih baik, seperti menampilkan modal, slideshow, atau drawer tanpa harus meninggalkan halaman saat ini.

## Konsep Dasar

Intercepting Routes menggunakan konvensi penulisan folder khusus dengan format:

- `(.)` - Mengintersepsi segmen pada level yang sama
- `(..)` - Mengintersepsi segmen satu level di atas
- `(..)(..)` - Mengintersepsi segmen dua level di atas
- `(...)` - Mengintersepsi segmen dari root app directory

## Contoh Kasus Penggunaan

1. **Modal** - Menampilkan konten dalam modal tanpa meninggalkan halaman saat ini
2. **Slideshow** - Menampilkan gambar dalam slideshow
3. **Sidebar atau Drawer** - Membuka panel di samping tanpa menavigasi pengguna ke halaman lain
4. **Form Popup** - Menampilkan formulir dalam popup

## Implementasi Demo

Dalam demo ini, kita membuat galeri foto sederhana dengan implementasi Intercepting Routes. Fitur utama:

1. **Tampilan Grid Foto** - Menampilkan galeri foto dalam grid
2. **Intercepting Modal** - Saat pengguna klik pada foto, modal akan muncul dengan foto yang diperbesar
3. **Navigasi Penuh** - Pengguna bisa melihat halaman penuh foto atau kembali ke galeri

### Struktur Folder

```
/gallery
  page.tsx              # Halaman galeri utama
  layout.tsx            # Layout dengan slot untuk modal
  /photos
    /[id]
      page.tsx          # Halaman detail foto lengkap
  /@modal               # Parallel route slot untuk modal
    default.tsx         # Komponen default saat tidak ada modal
    /(.)photos          # Intercepting route untuk foto dengan (.) untuk level yang sama
      /[id]
        page.tsx        # Komponen modal foto
```

### Cara Kerja

1. Saat pengguna menekan foto di `/gallery`, Next.js mengintercepti navigasi ke `/gallery/photos/[id]`
2. Daripada mengarahkan pengguna ke halaman baru, konten dari `/gallery/@modal/(.)photos/[id]/page.tsx` ditampilkan sebagai modal
3. URL di browser menjadi `/gallery/photos/[id]`, tetapi pengguna tetap berada di halaman galeri dengan modal terbuka
4. Jika pengguna menyegarkan halaman atau membagikan URL, navigasi langsung ke halaman penuh `/gallery/photos/[id]/page.tsx` tanpa modal

### Keuntungan

1. **URL yang Dapat Dibagikan** - Modal memiliki URL sendiri yang dapat dibagikan
2. **Pengalaman Pengguna yang Lebih Baik** - Pengguna tidak perlu meninggalkan halaman saat melihat detail
3. **Persistensi pada Refresh** - Modal dapat dipertahankan jika halaman di-refresh
4. **Navigasi Browser** - Tombol kembali browser akan menutup modal daripada kembali ke halaman sebelumnya

## Referensi

- [Dokumentasi Resmi Next.js tentang Intercepting Routes](https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes)
