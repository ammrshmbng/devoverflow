"use client";

import { useRouter } from "next/navigation";

export default function DetailModal({ params }: { params: { id: string } }) {
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
              Detail dalam Modal (Level yang sama)
            </h2>
            <button
              onClick={() => router.back()}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>

          <div className="mb-4">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
              (.) Same Level Intercept
            </span>
          </div>

          <div className="p-4 bg-blue-50 mb-6 rounded-lg">
            <h3 className="font-semibold mb-2">Info</h3>
            <p className="mb-2">ID: {id}</p>
            <p className="mb-2">
              Struktur folder:{" "}
              <code className="bg-gray-200 px-2 py-1 rounded">
                /examples/@modal/(.)detail/[id]/page.tsx
              </code>
            </p>
            <p>
              Mengintercepti:{" "}
              <code className="bg-gray-200 px-2 py-1 rounded">
                /examples/detail/[id]
              </code>
            </p>
          </div>

          <p className="mb-6 text-gray-700">
            Modal ini menggunakan konvensi (.) untuk mengintercepti rute pada
            level yang sama. Saat mengklik link di halaman contoh, URL berubah
            menjadi <code>/examples/detail/{id}</code> tapi konten ditampilkan
            dalam modal ini, bukan sebagai halaman penuh.
          </p>

          <div className="flex justify-between">
            <button
              onClick={() => router.back()}
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
            >
              Tutup
            </button>
            <a
              href={`/examples/detail/${id}`}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Lihat Halaman Penuh
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
