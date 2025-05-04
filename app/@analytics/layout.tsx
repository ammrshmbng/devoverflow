"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

// Komponen Tab yang akan digunakan untuk navigasi
function TabNavigation() {
  const pathname = usePathname();

  // Menentukan tab yang aktif berdasarkan path
  const isPageViewsActive =
    pathname === "/" || pathname.includes("/page-views");
  const isVisitorsActive = pathname.includes("/visitors");

  return (
    <div className="flex border-b mb-4">
      <Link
        href="/page-views"
        className={`px-4 py-2 font-medium text-sm ${
          isPageViewsActive
            ? "text-blue-600 border-b-2 border-blue-600"
            : "text-gray-600 hover:text-blue-600"
        }`}
      >
        Tampilan Halaman
      </Link>
      <Link
        href="/visitors"
        className={`px-4 py-2 font-medium text-sm ${
          isVisitorsActive
            ? "text-blue-600 border-b-2 border-blue-600"
            : "text-gray-600 hover:text-blue-600"
        }`}
      >
        Pengunjung
      </Link>
    </div>
  );
}

export default function AnalyticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <h2 className="text-lg font-semibold mb-2">Analitik</h2>
      <TabNavigation />
      {children}
    </div>
  );
}
