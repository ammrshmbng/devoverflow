import React from "react";

const AdminAnalyticsPage = () => {
  const adminMetrics = [
    {
      id: 1,
      name: "Total Pengguna",
      value: "15,489",
      change: "+12% bulan ini",
    },
    { id: 2, name: "Pengguna Baru", value: "2,845", change: "+18% bulan ini" },
    { id: 3, name: "Tingkat Retensi", value: "68%", change: "+5% bulan ini" },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 gap-4">
        {adminMetrics.map((metric) => (
          <div key={metric.id} className="bg-white p-3 rounded-md shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-gray-500 text-sm">{metric.name}</h3>
                <p className="text-xl font-bold">{metric.value}</p>
              </div>
              <div className="text-green-600 text-sm">{metric.change}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 bg-white rounded-md shadow-sm">
        <h3 className="font-medium mb-2">Log Aktivitas Admin</h3>
        <ul className="text-sm space-y-2">
          <li className="text-gray-600">
            Admin User 1 telah mengubah pengaturan sistem (10:25)
          </li>
          <li className="text-gray-600">
            Admin User 3 telah menghapus konten yang melanggar (09:15)
          </li>
          <li className="text-gray-600">
            Admin User 2 telah menambahkan pengguna baru (kemarin)
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminAnalyticsPage;
