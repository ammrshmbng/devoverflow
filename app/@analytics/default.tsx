import React from "react";

const DefaultAnalytics = () => {
  return (
    <div className="p-4 bg-purple-50 rounded-md border border-purple-200 text-center">
      <p className="text-purple-700">Data analitik tidak tersedia saat ini.</p>
      <button className="mt-2 px-4 py-2 bg-purple-500 text-white rounded-md text-sm">
        Muat Data Analitik
      </button>
    </div>
  );
};

export default DefaultAnalytics;
