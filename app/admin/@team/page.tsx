import React from "react";

const AdminTeamPage = () => {
  const adminTeamData = [
    {
      id: 1,
      name: "Admin User 1",
      role: "Super Admin",
      status: "Online",
      lastActive: "5 menit yang lalu",
    },
    {
      id: 2,
      name: "Admin User 2",
      role: "Content Admin",
      status: "Offline",
      lastActive: "3 jam yang lalu",
    },
    {
      id: 3,
      name: "Admin User 3",
      role: "Moderator",
      status: "Online",
      lastActive: "1 jam yang lalu",
    },
  ];

  return (
    <div>
      <ul className="divide-y">
        {adminTeamData.map((admin) => (
          <li key={admin.id} className="py-3">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">{admin.name}</h3>
                <p className="text-sm text-gray-600">{admin.role}</p>
              </div>
              <div className="text-right">
                <p
                  className={`text-sm ${admin.status === "Online" ? "text-green-600" : "text-red-600"}`}
                >
                  {admin.status}
                </p>
                <p className="text-xs text-gray-500">{admin.lastActive}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminTeamPage;
