import React, { useState } from 'react';
import './BusinessCardManager.css';

const BusinessCardManager = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites] = useState([
    { id: 1, name: "Marie Leroy", role: "Directrice Marketing" },
    { id: 2, name: "Thomas Roux", role: "Cheffe de Projet" }
  ]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Search functionality would be implemented here
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="business-card-manager">
      <header className="header">
        <h1>Trouvez, sauvegardez et partagez des cartes de contact numériques fiables en un clic</h1>
      </header>
      
      <div className="search-section">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Recherche par nom, rôle, entreprise ou téléphone"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">Rechercher</button>
        </form>
      </div>
      
      <div className="divider"></div>
      
      <section className="favorites-section">
        <h2>Vos favoris</h2>
        <div className="favorites-list">
          {favorites.map(card => (
            <div key={card.id} className="business-card">
              <div className="card-avatar">
                {card.name.charAt(0)}
              </div>
              <div className="card-info">
                <h3 className="card-name">{card.name}</h3>
                <p className="card-role">{card.role}</p>
              </div>
              <div className="card-actions">
                <button className="action-btn">📞</button>
                <button className="action-btn">✉️</button>
                <button className="action-btn">⋮</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BusinessCardManager;