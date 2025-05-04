# Demo Parallel Routes di Next.js

Demo ini menunjukkan penggunaan fitur Parallel Routes di Next.js, yang memungkinkan rendering beberapa halaman secara bersamaan dalam satu layout.

## Konsep Utama

Parallel Routes memungkinkan Anda untuk:

- Render beberapa halaman secara bersamaan dalam satu layout
- Membuat UI yang responsif dan dinamis
- Menerapkan rendering kondisional untuk kasus penggunaan yang kompleks

## Struktur Project

```
app/
├── page.tsx            # Halaman utama
├── layout.tsx          # Layout utama yang membungkus children, team, analytics
├── @team/              # Slot untuk konten team
│   ├── page.tsx        # Halaman default untuk konten team
│   └── default.tsx     # Fallback komponen untuk slot team
├── @analytics/         # Slot untuk konten analytics
│   ├── page.tsx        # Halaman default untuk konten analytics
│   └── default.tsx     # Fallback komponen untuk slot analytics
└── admin/              # Contoh halaman admin dengan rendering kondisional
    ├── page.tsx        # Halaman admin
    ├── layout.tsx      # Layout admin dengan kondisi cek autentikasi
    ├── @team/          # Slot team khusus untuk admin
    │   └── page.tsx    # Konten team untuk admin
    └── @analytics/     # Slot analytics khusus untuk admin
        └── page.tsx    # Konten analytics untuk admin
```

## Cara Kerja

1. **Slot Parallel**: Directory yang diawali dengan "@" (seperti @team, @analytics) merupakan slot yang akan dirender secara parallel.

2. **Layout dan Slot Props**: Layout component menerima parameter sesuai dengan nama slot (team, analytics) untuk merender konten.

3. **Default.tsx**: File ini berfungsi sebagai fallback jika halaman dalam slot tersebut tidak ada/belum dimuat.

4. **Rendering Kondisional**: Di halaman admin, terdapat contoh pengecekan autentikasi yang menentukan apakah slot parallel akan dirender atau tidak.

## Kasus Penggunaan

Parallel Routes sangat berguna untuk:

- Dashboard dengan beberapa panel data yang diambil secara terpisah
- Tampilan yang membutuhkan banyak bagian independen
- UI yang memiliki komponen kondisional
- Mengorganisir kode berdasarkan fitur alih-alih struktur routing

## Menjalankan Demo

```bash
npm run dev
```

## Halaman yang Dapat Dikunjungi

- `/` - Halaman utama dengan slot team dan analytics
- `/admin` - Halaman admin dengan slot team dan analytics khusus admin
