import Link from "next/link";

export default function DeepNestedPage2() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Halaman Deep Nested 2</h1>
      <p className="mb-6">
        Halaman ini berada di folder <code>/examples/nested/deep/page2</code>.
        Dari sini kita bisa mengakses global dengan (...) intercepting route.
      </p>

      <div className="p-4 bg-indigo-100 mb-6 rounded-lg">
        <h2 className="font-semibold mb-2">Demo (...) - Root Level</h2>
        <p className="mb-4">
          Contoh ini mendemonstrasikan intercepting route dari root app
          directory menggunakan notasi (...) pada struktur folder.
        </p>
        <Link
          href="/global/4"
          className="bg-pink-500 text-white px-4 py-2 rounded inline-block hover:bg-pink-600"
        >
          Lihat Global Item ID 4 (dalam Modal)
        </Link>
      </div>

      <div className="mt-4">
        <Link
          href="/examples/intercepting-routes"
          className="bg-indigo-500 text-white px-4 py-2 rounded inline-block hover:bg-indigo-600"
        >
          Kembali ke Examples
        </Link>
      </div>
    </div>
  );
}
