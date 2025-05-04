import Link from "next/link";

export default function NestedPage1() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Halaman Nested</h1>
      <p className="mb-6">
        Halaman ini berada di folder <code>/examples/nested/page1</code>. Dari
        sini kita bisa mengakses user dengan (..) intercepting route.
      </p>

      <div className="p-4 bg-purple-100 mb-6 rounded-lg">
        <h2 className="font-semibold mb-2">Demo (..) - One Level Up</h2>
        <p className="mb-4">
          Contoh ini mendemonstrasikan intercepting route satu level di atas
          menggunakan notasi (..) pada struktur folder.
        </p>
        <Link
          href="/examples/user/2"
          className="bg-green-500 text-white px-4 py-2 rounded inline-block hover:bg-green-600"
        >
          Lihat User ID 2 (dalam Modal)
        </Link>
      </div>

      <Link
        href="/examples/intercepting-routes"
        className="bg-purple-500 text-white px-4 py-2 rounded inline-block hover:bg-purple-600"
      >
        Kembali ke Examples
      </Link>
    </div>
  );
}
