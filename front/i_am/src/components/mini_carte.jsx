import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import userImage from "../assets/user.png";
import verified from "../assets/verified.png";

export default function Carte({ name, role }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <div className="relative bg-white rounded-2xl shadow-md p-6 w-72 flex flex-col items-center">
      {/* Heart badge in top-left */}
      <button
        onClick={toggleFavorite}
        className="absolute top-4 right-5 focus:outline-none"
      >
        <FaHeart
          className={`text-3xl ${
            isFavorite ? "text-red-500" : "text-white"
          }`}
          style={{
            filter: "drop-shadow(0 0 1px red)", // subtle red outline
          }}
        />
      </button>

      {/* Profile picture */}
      <img
        src={userImage}
        alt={name}
        className="w-16 h-16 rounded-full object-cover mb-3"
      />

      {/* Name + Verified */}
      <div className="flex items-center justify-center space-x-2 w-full mb-1">
        <div className="flex items-center space-x-1">
          <h3 className="font-semibold text-gray-900">{name}</h3>
          <img src={verified} alt="Verified" className="w-4 h-4" />
        </div>
      </div>

      {/* Role */}
      <p className="text-gray-600 text-sm">{role}</p>
    </div>
  );
}