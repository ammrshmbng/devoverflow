# Demo Intercepting Routes di Next.js

Demo ini menunjukkan penggunaan Intercepting Routes di Next.js App Router dengan berbagai jenis notasi intercepting yang tersedia.

## Konsep Dasar Intercepting Routes

Intercepting Routes adalah fitur yang memungkinkan kita untuk "menginterupsi" atau "mengintersepsi" navigasi ke route lain dan menampilkan kontennya dengan cara berbeda (misalnya dalam modal) tanpa harus meninggalkan halaman saat ini.

Beberapa kasus penggunaan umum:

- Modal atau popup
- Slideshow gambar
- Form dalam overlay
- Preview konten
- Detail item dalam panel samping

## Jenis-jenis Intercepting Routes

Next.js menyediakan beberapa notasi untuk mengintercepti segmen route:

1. **`(.)`** - Mengintercepti segmen pada level yang sama
2. **`(..)`** - Mengintercepti segmen satu level di atas
3. **`(..)(..)`** - Mengintercepti segmen dua level di atas
4. **`(...)`** - Mengintercepti segmen dari root app directory

## Demo yang Tersedia

Dalam project ini terdapat dua demo intercepting routes:

1. **Galeri Foto** - Demo sederhana yang menunjukkan penggunaan intercepting route untuk menampilkan modal foto.
2. **Contoh Lengkap** - Demo yang menunjukkan semua jenis notasi intercepting routes.

## Cara Kerja

### 1. Galeri Foto

- Halaman galeri: `/gallery`
- Halaman detail foto: `/gallery/photos/[id]`
- Intercepting route: `/gallery/@modal/(.)photos/[id]`

Saat pengguna mengklik foto di galeri:

- URL berubah menjadi `/gallery/photos/[id]`
- Tapi konten yang ditampilkan adalah modal dari `/gallery/@modal/(.)photos/[id]/page.tsx`
- Jika URL dibuka langsung, yang ditampilkan adalah halaman penuh `/gallery/photos/[id]/page.tsx`

### 2. Contoh Lengkap - Semua Jenis Notasi

#### (.) Same Level

- Intercepting `/examples/detail/[id]` dari `/examples/@modal/(.)detail/[id]`
- Digunakan untuk menampilkan detail dalam modal dari halaman examples utama.

#### (..) One Level Up

- Intercepting `/examples/user/[id]` dari `/examples/nested/@modal/(..)user/[id]`
- Digunakan untuk menampilkan user dalam modal dari halaman nested.

#### (..)(..) Two Levels Up

- Intercepting `/examples/product/[id]` dari `/examples/nested/deep/@modal/(..)(..)product/[id]`
- Digunakan untuk menampilkan product dalam modal dari halaman deep nested.

#### (...) Root Level

- Intercepting `/global/[id]` dari `/examples/nested/deep/@modal/(...)global/[id]`
- Digunakan untuk menampilkan item global dalam modal dari mana saja di aplikasi.

## Struktur Folder

```
/app
  /gallery                        # Demo Galeri Foto
    page.tsx                      # Halaman galeri utama
    layout.tsx                    # Layout dengan slot @modal
    /photos
      /[id]
        page.tsx                  # Halaman detail foto
    /@modal                       # Parallel route slot
      default.tsx                 # Komponen default (kosong)
      /(.)photos                  # Intercepting (.) same level
        /[id]
          page.tsx                # Komponen modal foto

  /examples                       # Demo Contoh Lengkap
    /intercepting-routes
      page.tsx                    # Halaman contoh utama

    layout.tsx                    # Layout dengan slot @modal
    /@modal                       # Parallel route slot
      default.tsx                 # Komponen default (kosong)
      /(.)detail                  # (.) Same level
        /[id]
          page.tsx                # Modal detail

    /detail                       # Target untuk (.) same level
      /[id]
        page.tsx                  # Halaman detail

    /nested                       # Folder nested untuk (..) demo
      layout.tsx                  # Layout dengan slot @modal
      /page1                      # Halaman nested contoh
        page.tsx
      /@modal                     # Parallel route slot
        default.tsx               # Komponen default (kosong)
        /(..)user                 # (..) One level up
          /[id]
            page.tsx              # Modal user

      /deep                       # Folder deep nested untuk (..)(..) demo
        layout.tsx                # Layout dengan slot @modal
        /page1                    # Halaman deep nested contoh 1
          page.tsx
        /page2                    # Halaman deep nested contoh 2
          page.tsx
        /@modal                   # Parallel route slot
          default.tsx             # Komponen default (kosong)
          /(..)(..)product        # (..)(..) Two levels up
            /[id]
              page.tsx            # Modal product
          /(...)global            # (...) Root level
            /[id]
              page.tsx            # Modal global item

    /user                         # Target untuk (..) one level up
      /[id]
        page.tsx                  # Halaman user

    /product                      # Target untuk (..)(..) two levels up
      /[id]
        page.tsx                  # Halaman product

  /global                         # Target untuk (...) root level
    /[id]
      page.tsx                    # Halaman global item
```

## Poin Penting tentang Intercepting Routes

1. **Konvensi penamaan** - Menggunakan (.), (..), (..)(..), dan (...) untuk mengintercepti rute.

2. **Parallel Routes** - Intercepting Routes biasanya digunakan bersama dengan Parallel Routes (@nama-slot) untuk menampilkan konten secara bersamaan.

3. **URL yang Dapat Dibagikan** - URL tetap mengarah ke halaman tujuan asli, memungkinkan URL dibagikan atau di-refresh.

4. **Soft Navigation vs Hard Navigation**:

   - Soft Navigation (klik link): Menampilkan intercepted route (modal)
   - Hard Navigation (refresh/direct URL): Menampilkan route asli (halaman penuh)

5. **Persistensi pada Reload** - Jika pengguna me-reload halaman dengan modal terbuka, mereka akan melihat halaman penuh, bukan modal.

6. **Navigasi Browser** - Tombol kembali browser akan menutup modal daripada kembali ke halaman sebelumnya.

## Referensi

- [Dokumentasi Resmi Next.js tentang Intercepting Routes](https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes)
