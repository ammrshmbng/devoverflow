import React from "react";

const VisitorsStats = [
  { id: 1, stat: "Total Pengunjung", value: "12,456", change: "+18%" },
  { id: 2, stat: "Pengunjung Baru", value: "8,721", change: "+22%" },
  { id: 3, stat: "Pengunjung Kembali", value: "3,735", change: "+8%" },
];

const DeviceData = [
  { device: "Mobile", percentage: 65 },
  { device: "Desktop", percentage: 30 },
  { device: "Tablet", percentage: 5 },
];

export default function VisitorsPage() {
  return (
    <div>
      <p className="text-sm text-gray-600 mb-4">
        Data pengunjung 30 hari terakhir
      </p>

      <div className="grid grid-cols-3 gap-4 mb-6">
        {VisitorsStats.map((stat) => (
          <div key={stat.id} className="bg-gray-50 rounded-md p-3">
            <p className="text-xs text-gray-500">{stat.stat}</p>
            <p className="text-lg font-semibold">{stat.value}</p>
            <p className="text-xs text-green-600">{stat.change}</p>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <h3 className="text-sm font-medium mb-2">Perangkat</h3>
        {DeviceData.map((item) => (
          <div key={item.device} className="mb-2">
            <div className="flex justify-between mb-1">
              <span className="text-xs text-gray-700">{item.device}</span>
              <span className="text-xs text-gray-700">{item.percentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-purple-50 p-3 rounded-md border border-purple-100">
        <h3 className="text-sm font-medium text-purple-800 mb-1">Insight</h3>
        <p className="text-xs text-purple-700">
          Mayoritas pengunjung (65%) mengakses situs melalui perangkat mobile,
          memastikan desain responsif sangat penting untuk pengalaman pengguna.
        </p>
      </div>
    </div>
  );
}
