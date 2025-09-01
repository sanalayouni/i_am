const express = require("express");
const router = express.Router();
const Utilisateur = require("../models/utilisateurs");
const utilisateursController = require("../controllers/utilisateurController");
// Créer un nouvel utilisateur
router.post("/", utilisateursController.createUtilisateur);

// Récupérer tous les utilisateurs
router.get("/", utilisateursController.getAllUtilisateurs);
    


// Récupérer un utilisateur par ID
router.get("/:id", utilisateursController.getUtilisateurById);

    

// UPDATE - update utilisateur by ID
router.put("/:id",utilisateursController.updateUtilisateurById);
  
// DELETE - delete utilisateur by ID

router.delete("/:id", utilisateursController.deleteUtilisateurById);
  
module.exports = router;



