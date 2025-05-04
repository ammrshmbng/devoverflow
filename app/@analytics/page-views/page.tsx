import React from "react";

const PageViewsData = [
  { id: 1, page: "/beranda", views: 1245, bounceRate: "35%" },
  { id: 2, page: "/produk", views: 863, bounceRate: "42%" },
  { id: 3, page: "/blog", views: 571, bounceRate: "28%" },
  { id: 4, page: "/kontak", views: 409, bounceRate: "25%" },
];

export default function PageViewsPage() {
  return (
    <div>
      <p className="text-sm text-gray-600 mb-4">
        Statistik tampilan halaman selama 30 hari terakhir
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Halaman
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tampilan
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Bounce Rate
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {PageViewsData.map((item) => (
              <tr key={item.id}>
                <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-blue-600">
                  {item.page}
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                  {item.views.toLocaleString()}
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                  {item.bounceRate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 bg-blue-50 p-3 rounded-md border border-blue-100">
        <h3 className="text-sm font-medium text-blue-800 mb-1">Insight</h3>
        <p className="text-xs text-blue-700">
          Halaman Beranda memiliki kunjungan tertinggi, tetapi halaman Kontak
          memiliki bounce rate terendah, menunjukkan pengunjung yang lebih
          tertarik pada konten tersebut.
        </p>
      </div>
    </div>
  );
}
