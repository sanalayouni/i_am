// Carte.jsx
import { FaHeart } from "react-icons/fa";

export default function Carte({ image, name, role, isFavorite }) {
  return (
<div className="bg-white rounded-2xl shadow-md p-6 w-72 flex flex-col items-center">      {/* Profile picture */}
      <img
        src={image}
        alt={name}
        className="w-16 h-16 rounded-full object-cover mb-3"
      />

      {/* Name + Favorite */}
      <div className="flex items-center justify-between w-full mb-1">
        <h3 className="font-semibold text-gray-900">{name}</h3>
        {isFavorite && <FaHeart className="text-red-500 text-2xl" />}
      </div>

      {/* Role */}
      <p className="text-gray-600 text-sm">{role}</p>
    </div>
  );
}
