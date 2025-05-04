"use client";

import Link from "next/link";
import {
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
} from "next/navigation";

export default function DemoLayout({
  children,
  tab,
}: {
  children: React.ReactNode;
  tab: React.ReactNode;
}) {
  // Mendapatkan segment aktif pertama
  const activeSegment = useSelectedLayoutSegment();

  // Mendapatkan semua segment aktif
  const allSegments = useSelectedLayoutSegments();

  // Mendapatkan segment dari parallel route 'tab'
  const tabSegment = useSelectedLayoutSegment("tab");

  console.log(activeSegment, "activeSegment");
  console.log(allSegments, "allSegments");
  console.log(tabSegment, "tabSegment");
  return (
    <div className="mx-auto max-w-7xl p-6">
      <h1 className="text-2xl font-bold mb-6">
        Demo useSelectedLayoutSegment(s)
      </h1>

      <div className="bg-gray-100 p-4 mb-6 rounded-lg">
        <p className="font-semibold">
          Segment Aktif:{" "}
          <span className="text-blue-600">{activeSegment || "none"}</span>
        </p>
        <p className="font-semibold">
          Semua Segments:{" "}
          <span className="text-green-600">
            {allSegments.length > 0 ? allSegments.join(" / ") : "none"}
          </span>
        </p>
        <p className="font-semibold">
          Tab Segment (Parallel Route):{" "}
          <span className="text-purple-600">{tabSegment || "default"}</span>
        </p>
      </div>

      <div className="flex gap-4 mb-6">
        <Link
          href="/demo-segment"
          className={`px-4 py-2 rounded-md ${!activeSegment ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Home
        </Link>
        <Link
          href="/demo-segment/dashboard"
          className={`px-4 py-2 rounded-md ${activeSegment === "dashboard" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Dashboard
        </Link>
        <Link
          href="/demo-segment/settings"
          className={`px-4 py-2 rounded-md ${activeSegment === "settings" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Settings
        </Link>
        <Link
          href="/demo-segment/profile"
          className={`px-4 py-2 rounded-md ${activeSegment === "profile" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Profile
        </Link>
      </div>

      <div className="bg-white border rounded-lg p-6">{children}</div>

      {tab}
    </div>
  );
}
