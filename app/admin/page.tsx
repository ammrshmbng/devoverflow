import React from "react";

const AdminPage = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Halaman Admin</h1>
      <p className="mb-4">
        Ini adalah halaman admin yang hanya dapat diakses oleh pengguna dengan
        hak akses admin.
      </p>
      <p>
        Halaman ini merupakan contoh penggunaan parallel routes dengan
        kondisional rendering.
      </p>
    </div>
  );
};

export default AdminPage;
