const mongoose = require("mongoose");
const connectDB = require("./config/db");
const personnes = require("./models/personnes");
const utilisateurs = require("./models/utilisateurs");
const entreprises = require("./models/entreprises"); 

//  les donnees d'une carte d'une personne:
const personnesData = [
  {
    nom: "Paul",
    prenom: "Dupont",
    poste: "Chef de Projet",
    localisation: "France, Paris",
    telephone: "78541236",
    email: "Paul.Dupont@example.com"
  }
];

async function seedDB() {
  try {
    await connectDB();

    // Insérer une personne en premier
    const personneinserer = await personnes.insertMany(personnesData);
    console.log(" Données personne insérées :", personneinserer);

    // Utiliser l'ID de la personne insérée pour créer un utilisateur
    const utilisateursData = [
      {
        nom: "Alice",
        email: "alice@example.com",
        favorites: [
          {
            itemId: personneinserer[0]._id, 
            itemType: "personnes",
            addedAt: new Date()
          }
        ]
      }
    ];

    const utilisateurinserer = await utilisateurs.insertMany(utilisateursData);
    console.log(" Données utilisateur insérées :", utilisateurinserer);

    // Créer une entreprise en liant la personne comme directeur
    const entreprisesData = [
      {
        nom: "Tagmanya",
        intro: "Entreprise spécialisée dans la tech",
        description: "Tagmanya est une société innovante dans le domaine des solutions digitales.",
        rne: "RNE123456",
        vatNombre: "VAT987654",
        DetailsDuBank: "Banque BIAT - RIB: 123456789",
        email: "contact@tagmanya.com",
        phone: "+216 71 123 456",
        localisation: "Tunis, Tunisie",
        verified: true,
        director: personneinserer[0]._id, 
        members: [
          {
            person: personneinserer[0]._id,
            poste: "Chef de Projet"
          }
        ]
      }
    ];

    const entrepriseinserer = await entreprises.insertMany(entreprisesData);
    console.log(" Données entreprise insérées :", entrepriseinserer);

    process.exit(); // exit après seed
  } catch (error) {
    console.error("Seed failed:", error);
    process.exit(1);
  }
}
seedDB();
