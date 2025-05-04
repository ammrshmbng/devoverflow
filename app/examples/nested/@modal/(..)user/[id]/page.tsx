"use client";

import { useRouter } from "next/navigation";

export default function UserModal({ params }: { params: { id: string } }) {
  const router = useRouter();
  const id = params?.id;

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
      onClick={() => router.back()}
    >
      <div
        className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">
              User dalam Modal (One Level Up)
            </h2>
            <button
              onClick={() => router.back()}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>

          <div className="mb-4">
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
              (..) One Level Up Intercept
            </span>
          </div>

          <div className="p-4 bg-green-50 mb-6 rounded-lg">
            <h3 className="font-semibold mb-2">Info</h3>
            <p className="mb-2">User ID: {id}</p>
            <p className="mb-2">
              Struktur folder:{" "}
              <code className="bg-gray-200 px-2 py-1 rounded">
                /examples/nested/@modal/(..)user/[id]/page.tsx
              </code>
            </p>
            <p>
              Mengintercepti:{" "}
              <code className="bg-gray-200 px-2 py-1 rounded">
                /examples/user/[id]
              </code>
            </p>
          </div>

          <p className="mb-6 text-gray-700">
            Modal ini menggunakan konvensi (..) untuk mengintercepti rute satu
            level di atas. Karena kita berada di <code>/examples/nested</code>,
            kita menggunakan (..) untuk mencapai <code>/examples/user</code>{" "}
            yang berada satu level di atas.
          </p>

          <div className="flex justify-between">
            <button
              onClick={() => router.back()}
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
            >
              Tutup
            </button>
            <a
              href={`/examples/user/${id}`}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Lihat Halaman Penuh
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
