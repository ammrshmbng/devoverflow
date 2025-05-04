# Demo Tab Groups dengan Parallel Routes di Next.js

Demo ini menunjukkan bagaimana mengimplementasikan Tab Groups menggunakan fitur Parallel Routes di Next.js App Router.

## Apa itu Tab Groups?

Tab Groups adalah pola navigasi berbasis tab yang diimplementasikan menggunakan Parallel Routes di Next.js. Ini memungkinkan pengguna untuk beralih antara beberapa halaman berbeda dalam satu area tampilan tanpa memuat ulang seluruh halaman.

## Struktur Folder

```
app/
├── page.tsx                   # Halaman utama dengan penjelasan
├── layout.tsx                 # Layout utama
├── @team/                     # Slot parallel route untuk tim
│   └── page.tsx               # Konten tim
├── @analytics/                # Slot parallel route untuk analytics dengan tab
│   ├── layout.tsx             # Layout khusus untuk tab navigation
│   ├── default.tsx            # Redirect otomatis ke tab default
│   ├── page-views/            # Tab pertama
│   │   └── page.tsx           # Konten untuk tab page-views
│   └── visitors/              # Tab kedua
│       └── page.tsx           # Konten untuk tab visitors
```

## Cara Kerja Tab Groups

1. **Buat Slot Parallel Route**:

   - Folder `@analytics` berperan sebagai slot parallel route

2. **Buat Layout dengan Navigasi Tab**:

   - File `@analytics/layout.tsx` berisi navigasi tab dan mengatur tampilan konten
   - Layout ini akan membungkus konten dari tab yang sedang aktif (children)

3. **Buat Halaman untuk Setiap Tab**:

   - Folder `page-views` dan `visitors` berisi konten untuk setiap tab
   - Setiap tab adalah halaman terpisah dengan routing sendiri

4. **Redirect Default**:
   - File `@analytics/default.tsx` akan mengarahkan pengguna ke tab default
   - Ini berjalan saat pertama kali halaman dimuat atau saat URL tidak cocok dengan tab manapun

## Cara Navigasi Tab Bekerja

1. **Link Navigation**: Menggunakan `Link` dari Next.js untuk navigasi antar tab

   ```tsx
   <Link href="/page-views">Tampilan Halaman</Link>
   <Link href="/visitors">Pengunjung</Link>
   ```

2. **Menentukan Tab Aktif**: Menggunakan `usePathname` untuk mengetahui tab mana yang aktif

   ```tsx
   const pathname = usePathname();
   const isPageViewsActive = pathname.includes("/page-views");
   ```

3. **Styling Kondisional**: Menerapkan style berbeda pada tab yang aktif
   ```tsx
   className={isPageViewsActive ? 'active-tab-style' : 'inactive-tab-style'}
   ```

## Keuntungan Tab Groups

1. **Navigasi Tanpa Refresh**: Pengguna dapat berpindah antar tab tanpa reload halaman
2. **State Terjaga**: State komponen dipertahankan saat berpindah tab
3. **URL yang Bersih**: Setiap tab memiliki URL sendiri yang dapat di-bookmark
4. **Pemisahan Kode**: Kode untuk setiap tab terpisah, lebih mudah dikelola

## Menjalankan Demo

```bash
npm run dev
```

Buka browser dan kunjungi http://localhost:3000. Anda akan melihat tampilan dengan panel Analytics yang memiliki dua tab: "Tampilan Halaman" dan "Pengunjung".

## Perbedaan dengan Implementasi Tab Tradisional

Pada implementasi tab tradisional, biasanya kita menggunakan state untuk menampilkan/menyembunyikan konten tab. Dengan pendekatan Tab Groups, setiap tab adalah halaman terpisah dengan routing sendiri, memberikan pengalaman navigasi yang lebih baik dan URL yang bisa di-bookmark.
