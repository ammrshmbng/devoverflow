import React from "react";

const TeamPage = () => {
  const teamMembers = [
    { id: 1, name: "Budi Santoso", role: "Frontend Developer", avatar: "👨‍💻" },
    { id: 2, name: "Siti Rahayu", role: "Backend Developer", avatar: "👩‍💻" },
    { id: 3, name: "Andi Wijaya", role: "UI/UX Designer", avatar: "🎨" },
    { id: 4, name: "Dewi Putri", role: "Project Manager", avatar: "📊" },
  ];

  return (
    <div className="space-y-4">
      <p className="text-sm text-blue-700">
        Tim kami terdiri dari profesional berbakat
      </p>

      <ul className="space-y-3">
        {teamMembers.map((member) => (
          <li
            key={member.id}
            className="flex items-center gap-3 p-3 bg-white rounded-md shadow-sm"
          >
            <div className="text-2xl">{member.avatar}</div>
            <div>
              <h3 className="font-medium">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamPage;
