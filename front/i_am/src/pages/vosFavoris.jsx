import React from "react";
import SearchBar from "../components/searchBar";
import Card from "../components/mini_carte";
import logo from "../assets/i_am_logo.png";

export default function Favorites() {
  const favorites = [
    {
      id: 1,
      name: "Marie Leroy",
      role: "Directrice Marketing",
      entreprise: "Tagmanya",
      entrepriseUrl: "https://tagmanya.com",
      image: "/images/marie-leroy.jpg",
      favorite: true,
    },
    {
      id: 2,
      name: "Thomas Roux",
      role: "Chef de Projet",
      entreprise: "Tagmanya",
      entrepriseUrl: "https://tagmanya.com",
      image: "/images/thomas-roux.jpg",
      favorite: true,
    },
    {
      id: 3,
      name: "Marie Morel",
      role: "Directeur financier",
      entreprise: "Tagmanya",
      entrepriseUrl: "https://tagmanya.com",
      image: "/images/marie-morel.jpg",
      favorite: true,
    },
  ];

  return (
    <div className="min-h-screen  text-white relative">
      {/* Logo outside content */}
      <div className="absolute top-2 -left-20 z-10">
        <img src={logo} alt="Logo" className="h-40 w-40 object-contain" />
      </div>

      {/* Main content */}
      <div className="pl-10 pr-10 pt-[160px]">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-20 text-left">Vos favoris</h1>

        {/* Search Bar */}
        <div className="mb-20">
          <SearchBar placeholder="Recherche par nom, rôle, entreprise ou téléphone" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {favorites.map((person) => (
            <Card key={person.id} {...person} />
          ))}
        </div>
      </div>
    </div>
  );
}