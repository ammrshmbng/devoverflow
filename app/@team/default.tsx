import React from "react";

const DefaultTeam = () => {
  return (
    <div className="p-4 bg-blue-50 rounded-md border border-blue-200 text-center">
      <p className="text-blue-700">Data tim tidak tersedia saat ini.</p>
      <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md text-sm">
        Muat Data Tim
      </button>
    </div>
  );
};

export default DefaultTeam;
