import React from "react";

export default function Home() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h1 className="text-2xl font-bold mb-4">
        Demo Tab Groups dengan Parallel Routes
      </h1>

      <div className="space-y-4">
        <p>
          Demo ini menunjukkan bagaimana mengimplementasikan Tab Groups
          menggunakan Parallel Routes di Next.js App Router.
        </p>

        <div className="bg-blue-50 p-4 rounded-md border border-blue-100">
          <h2 className="font-semibold text-blue-800 mb-2">
            Apa itu Tab Groups?
          </h2>
          <p className="text-sm text-blue-700">
            Tab Groups memungkinkan kita membuat navigasi tab di dalam sebuah
            slot parallel route. Dengan ini, pengguna dapat beralih antara
            halaman yang berbeda tanpa me-reload seluruh halaman.
          </p>
        </div>

        <div className="bg-green-50 p-4 rounded-md border border-green-100">
          <h2 className="font-semibold text-green-800 mb-2">Cara Kerja</h2>
          <p className="text-sm text-green-700 mb-2">
            1. Buat folder dengan awalan @ (misal: @analytics) sebagai slot
            parallel route
          </p>
          <p className="text-sm text-green-700 mb-2">
            2. Di dalam folder @analytics, buat layout.tsx yang berisi navigasi
            tab
          </p>
          <p className="text-sm text-green-700 mb-2">
            3. Buat subfolder untuk setiap tab (misal: page-views, visitors)
          </p>
          <p className="text-sm text-green-700">
            4. Buat default.tsx untuk menangani aksi default (misal: mengarahkan
            ke tab pertama)
          </p>
        </div>

        <p className="text-sm">
          Silakan perhatikan panel Analytics di sebelah kanan yang menunjukkan
          implementasi tab groups. Anda bisa beralih antara tab "Tampilan
          Halaman" dan "Pengunjung".
        </p>
      </div>
    </div>
  );
}
