import Link from "next/link";

export default function DeepNestedPage1() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Halaman Deep Nested</h1>
      <p className="mb-6">
        Halaman ini berada di folder <code>/examples/nested/deep/page1</code>.
        Dari sini kita bisa mengakses product dengan (..)(..) intercepting
        route.
      </p>

      <div className="p-4 bg-yellow-100 mb-6 rounded-lg">
        <h2 className="font-semibold mb-2">Demo (..)(..) - Two Levels Up</h2>
        <p className="mb-4">
          Contoh ini mendemonstrasikan intercepting route dua level di atas
          menggunakan notasi (..)(..) pada struktur folder.
        </p>
        <Link
          href="/examples/product/3"
          className="bg-red-500 text-white px-4 py-2 rounded inline-block hover:bg-red-600"
        >
          Lihat Product ID 3 (dalam Modal)
        </Link>
      </div>

      <div className="mt-4">
        <Link
          href="/examples/intercepting-routes"
          className="bg-yellow-500 text-white px-4 py-2 rounded inline-block hover:bg-yellow-600"
        >
          Kembali ke Examples
        </Link>
      </div>
    </div>
  );
}
