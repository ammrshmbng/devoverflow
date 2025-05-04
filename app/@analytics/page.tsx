import React from "react";

const AnalyticsPage = () => {
  const analyticsData = [
    {
      id: 1,
      metric: "Pengguna Aktif",
      value: "1.245",
      change: "+15%",
      color: "text-green-600",
    },
    {
      id: 2,
      metric: "Waktu Sesi",
      value: "4:32",
      change: "+8%",
      color: "text-green-600",
    },
    {
      id: 3,
      metric: "Tingkat Konversi",
      value: "3.2%",
      change: "-2%",
      color: "text-red-600",
    },
    {
      id: 4,
      metric: "Pendapatan",
      value: "Rp 12.5jt",
      change: "+22%",
      color: "text-green-600",
    },
  ];

  return (
    <div className="space-y-4">
      <p className="text-sm text-purple-700">
        Statistik performa selama 30 hari terakhir
      </p>

      <div className="grid grid-cols-2 gap-3">
        {analyticsData.map((item) => (
          <div key={item.id} className="p-3 bg-white rounded-md shadow-sm">
            <p className="text-sm text-gray-600">{item.metric}</p>
            <p className="text-xl font-semibold">{item.value}</p>
            <p className={`text-sm ${item.color}`}>{item.change}</p>
          </div>
        ))}
      </div>

      <div className="h-32 bg-white rounded-md p-3 flex items-center justify-center">
        <p className="text-gray-500">
          Visualisasi grafik akan ditampilkan di sini
        </p>
      </div>
    </div>
  );
};

export default AnalyticsPage;
