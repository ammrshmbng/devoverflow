import Link from "next/link";

export default function DetailPage({ params }: { params: { id: string } }) {
  const id = params?.id;

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Halaman Detail {id}</h1>
      <p className="mb-6">
        Ini adalah halaman detail lengkap. Jika Anda mengakses halaman ini
        langsung, Anda akan melihat halaman penuh ini, bukan dalam modal.
      </p>

      <div className="p-4 bg-blue-100 mb-6 rounded-lg">
        <h2 className="font-semibold mb-2">Info</h2>
        <p>
          URL saat ini:{" "}
          <code className="bg-gray-200 px-2 py-1 rounded">
            /examples/detail/{id}
          </code>
        </p>
      </div>

      <Link
        href="/examples/intercepting-routes"
        className="bg-blue-500 text-white px-4 py-2 rounded inline-block hover:bg-blue-600"
      >
        Kembali ke Examples
      </Link>
    </div>
  );
}
