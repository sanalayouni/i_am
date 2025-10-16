import React from 'react';
import { useNavigate } from "react-router-dom";
export default function SidePanel() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login"); 
  };
  const handleFavorite = () => {
    navigate("/favorites"); 
  };
  return (
    
    <div className="h-screen w-80 bg-gradient-to-b from-blue-900 to-blue-950 text-white p-6 flex flex-col ">
      {/* User Profile Section */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mb-4">
          <svg className="w-16 h-16 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
        </div>
        <h2 className="text-2xl font-semibold">Nadia Martin</h2>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 space-y-4">
        {/* Favoris */}
        <div  onClick={handleFavorite}className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-800 transition-colors cursor-pointer">
          <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/>
          </svg>
          <span className="text-lg">Favoris</span>
        </div>

        {/* Recherches Récentes */}
        <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-800 transition-colors cursor-pointer">
          <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
          <span className="text-lg">Recherches Récentes</span>
        </div>
      </nav>

      {/* Disconnect Button */}
      <button
        onClick={handleLogout}
        className="mt-auto text-red-500 text-xl font-semibold hover:text-red-400 transition-colors py-3"
      >
        Déconnecter
      </button>
    </div>
  );
}