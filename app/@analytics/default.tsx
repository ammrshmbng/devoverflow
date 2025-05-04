"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

// Komponen ini akan dirender ketika tidak ada halaman spesifik yang dipilih
// Ini akan mengarahkan pengguna ke tab page-views secara otomatis
export default function DefaultAnalytics() {
  const router = useRouter();

  useEffect(() => {
    // Arahkan ke tab page-views secara otomatis
    router.push("/page-views");
  }, [router]);

  // Tampilkan pesan loading selama redirect
  return (
    <div className="p-4 text-center">
      <p className="text-sm text-gray-600">Memuat data analitik...</p>
    </div>
  );
}
