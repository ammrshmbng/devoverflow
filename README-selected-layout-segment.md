# Demo useSelectedLayoutSegment dan useSelectedLayoutSegments

Demo ini menunjukkan cara penggunaan hooks `useSelectedLayoutSegment` dan `useSelectedLayoutSegments` dari Next.js App Router.

## Apa yang Ditampilkan

1. **Segment Aktif**: Menunjukkan segment pertama yang aktif di rute saat ini menggunakan `useSelectedLayoutSegment()`
2. **Semua Segments**: Menunjukkan array dari semua segment aktif menggunakan `useSelectedLayoutSegments()`
3. **Parallel Route Segment**: Menunjukkan penggunaan `useSelectedLayoutSegment('tab')` untuk mengakses segment pada parallel route

## Perbedaan dengan usePathname

- **usePathname()**: Mengembalikan path lengkap URL secara universal/absolut (misalnya `/demo-segment/profile/settings`)
- **useSelectedLayoutSegment()**: Mengembalikan segment secara relatif terhadap layout tempat hook dipanggil

## Cara Mengakses Demo

1. Jalankan aplikasi dengan `npm run dev` atau `yarn dev`
2. Buka [http://localhost:3000/demo-segment](http://localhost:3000/demo-segment) di browser
3. Gunakan navigasi untuk melihat perubahan nilai segment

## Cara Penggunaan

- Klik pada navigasi utama (Home, Dashboard, Settings, Profile) untuk melihat perubahan segment utama
- Klik pada navigasi tabs (Default, Info, Help) untuk melihat perubahan segment parallel route
- Kunjungi `/demo-segment/profile/settings` untuk melihat bagaimana `useSelectedLayoutSegments` mengembalikan array segment lengkap

## Struktur Folder

```
demo-segment/
├── layout.tsx          # Layout utama dengan navigasi dan info segment
├── page.tsx            # Halaman utama
├── @tab/               # Parallel route
│   ├── default.tsx     # Tab default
│   ├── info.tsx        # Tab info
│   └── help.tsx        # Tab help
├── dashboard/
│   └── page.tsx        # Halaman dashboard
├── settings/
│   └── page.tsx        # Halaman settings
└── profile/
    ├── page.tsx        # Halaman profile
    └── settings/
        └── page.tsx    # Halaman pengaturan profile (nested segment)
```

## Poin Penting

- `useSelectedLayoutSegment()` hanya mengembalikan segment pertama yang aktif
- `useSelectedLayoutSegments()` mengembalikan array dari semua segment yang aktif
- Dengan parameter `parallelRoutesKey`, hooks ini dapat mengakses segment pada parallel route tertentu

## Best Practices

- Gunakan hook ini terutama dalam komponen layout untuk mempengaruhi navigasi
- Hindari penggunaan di dalam page.tsx kecuali memang diperlukan
- Untuk kebutuhan path lengkap, gunakan `usePathname()` sebagai alternatif
