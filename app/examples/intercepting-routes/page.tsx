import Link from "next/link";

export default function InterceptingRoutesExamples() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Contoh Intercepting Routes</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contoh (.) - Same Level */}
        <div className="border p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-2">1. (.) - Level yang Sama</h2>
          <p className="mb-4">Mengintercepti segmen pada level yang sama.</p>
          <div className="bg-gray-100 p-3 rounded mb-4">
            <code className="text-sm font-mono">
              /examples/@modal/(.)detail/123 ⟶ intercepting /examples/detail/123
            </code>
          </div>
          <Link
            href="/examples/detail/1"
            className="bg-blue-500 text-white px-4 py-2 rounded inline-block hover:bg-blue-600"
          >
            Lihat (.) Same Level
          </Link>
        </div>

        {/* Contoh (..) - One Level Up */}
        <div className="border p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-2">
            2. (..) - Satu Level di Atas
          </h2>
          <p className="mb-4">Mengintercepti segmen satu level di atas.</p>
          <div className="bg-gray-100 p-3 rounded mb-4">
            <code className="text-sm font-mono">
              /examples/nested/@modal/(..)user/123 ⟶ intercepting
              /examples/user/123
            </code>
          </div>
          <Link
            href="/examples/nested/page1"
            className="bg-purple-500 text-white px-4 py-2 rounded inline-block hover:bg-purple-600 mr-2"
          >
            Buka Nested Page
          </Link>
          <Link
            href="/examples/user/2"
            className="bg-green-500 text-white px-4 py-2 rounded inline-block hover:bg-green-600"
          >
            Lihat (..) One Level Up
          </Link>
        </div>

        {/* Contoh (..)(..) - Two Levels Up */}
        <div className="border p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-2">
            3. (..)(..) - Dua Level di Atas
          </h2>
          <p className="mb-4">Mengintercepti segmen dua level di atas.</p>
          <div className="bg-gray-100 p-3 rounded mb-4">
            <code className="text-sm font-mono">
              /examples/nested/deep/@modal/(..)(..)product/123 ⟶ intercepting
              /examples/product/123
            </code>
          </div>
          <Link
            href="/examples/nested/deep/page1"
            className="bg-yellow-500 text-white px-4 py-2 rounded inline-block hover:bg-yellow-600 mr-2"
          >
            Buka Deep Nested Page
          </Link>
          <Link
            href="/examples/product/3"
            className="bg-red-500 text-white px-4 py-2 rounded inline-block hover:bg-red-600"
          >
            Lihat (..)(..) Two Levels Up
          </Link>
        </div>

        {/* Contoh (...) - Root Level */}
        <div className="border p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-2">4. (...) - Dari Root App</h2>
          <p className="mb-4">Mengintercepti segmen dari root app directory.</p>
          <div className="bg-gray-100 p-3 rounded mb-4">
            <code className="text-sm font-mono">
              /examples/nested/deep/@modal/(...)global/123 ⟶ intercepting
              /global/123 dari root
            </code>
          </div>
          <Link
            href="/examples/nested/deep/page2"
            className="bg-indigo-500 text-white px-4 py-2 rounded inline-block hover:bg-indigo-600 mr-2"
          >
            Buka Deep Page 2
          </Link>
          <Link
            href="/global/4"
            className="bg-pink-500 text-white px-4 py-2 rounded inline-block hover:bg-pink-600"
          >
            Lihat (...) Root Level
          </Link>
        </div>
      </div>

      <div className="mt-8">
        <Link
          href="/"
          className="bg-gray-500 text-white px-4 py-2 rounded inline-block hover:bg-gray-600"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
