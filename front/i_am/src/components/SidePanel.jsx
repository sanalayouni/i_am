// src/components/SidePanel.jsx
import { useNavigate } from "react-router-dom";

const SidePanel = ({ user }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // logout logic (clear token, etc.)
    console.log("User logged out");
    navigate("/login"); // redirect
  };

  return (
    <div className="w-60 h-full bg-gradient-to-b from-blue-900 to-blue-700 text-white flex flex-col items-center py-6 rounded-r-2xl shadow-lg">
      {/* Profile Icon */}
      <div className="flex flex-col items-center mb-6">
        <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-blue-800 text-2xl">
          👤
        </div>
        <p className="mt-3 font-semibold">{user?.name || "Utilisateur"}</p>
      </div>

      {/* Menu Items */}
      <div className="flex flex-col gap-4 text-sm font-medium">
        <button className="flex items-center gap-2 hover:text-blue-300">
          📁 Favoris
        </button>
        <button className="flex items-center gap-2 hover:text-blue-300">
          🔍 Recherches Récentes
        </button>
      </div>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="mt-auto text-red-500 font-semibold hover:text-red-700"
      >
        Déconnecter
      </button>
    </div>
  );
};

export default SidePanel;
