import React from "react";

// Simulasi cek autentikasi
const isAdmin = true; // Ubah ke false untuk menguji kondisi tidak terotentikasi

export default function AdminLayout({
  children,
  team,
  analytics,
}: {
  children: React.ReactNode;
  team: React.ReactNode;
  analytics: React.ReactNode;
}) {
  if (!isAdmin) {
    return (
      <div className="p-8 bg-red-50 text-center rounded-lg">
        <h2 className="text-red-600 text-xl font-bold">Akses Ditolak</h2>
        <p className="mt-2">
          Anda tidak memiliki izin untuk mengakses halaman ini.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {children}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="font-bold mb-2 text-gray-800">Data Tim Admin</h2>
          {team}
        </div>

        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="font-bold mb-2 text-gray-800">Data Analitik Admin</h2>
          {analytics}
        </div>
      </div>
    </div>
  );
}
