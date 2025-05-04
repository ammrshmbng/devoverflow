import Link from "next/link";

export default function DemoHomePage() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Halaman Utama Demo</h2>
      <p className="mb-4">
        Ini adalah demonstrasi penggunaan hooks{" "}
        <code>useSelectedLayoutSegment</code> dan{" "}
        <code>useSelectedLayoutSegments</code> dari Next.js.
      </p>
      <div className="bg-yellow-100 p-4 rounded-md mb-6">
        <h3 className="font-bold mb-2">Cara Kerja:</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <code>useSelectedLayoutSegment()</code> mengembalikan segment
            pertama yang aktif di rute saat ini.
          </li>
          <li>
            <code>useSelectedLayoutSegments()</code> mengembalikan array dari
            semua segment aktif di rute saat ini.
          </li>
          <li>
            <code>useSelectedLayoutSegment(&apos;tab&apos;)</code> mengembalikan
            segment aktif dari parallel route yang bernama <code>tab</code>.
          </li>
          <li>Klik pada navigasi di atas untuk melihat perubahan segment.</li>
        </ul>
      </div>

      <div className="mt-6">
        <h3 className="font-bold mb-2">Navigasi Parallel Route:</h3>
        <p className="mb-2">
          Klik link di bawah untuk melihat perubahan pada parallel route
          &apos;@tab&apos;:
        </p>

        <div className="flex gap-2">
          <Link
            href="/demo-segment"
            className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
          >
            Default Tab
          </Link>
          <Link
            href="/demo-segment/info"
            className="px-3 py-1 bg-blue-200 rounded-md hover:bg-blue-300"
          >
            Info Tab
          </Link>
          <Link
            href="/demo-segment/help"
            className="px-3 py-1 bg-yellow-200 rounded-md hover:bg-yellow-300"
          >
            Help Tab
          </Link>
        </div>
      </div>
    </div>
  );
}
