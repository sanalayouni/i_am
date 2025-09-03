const express = require("express");
const router = express.Router();
const Utilisateur = require("../models/utilisateurs");
const utilisateursController = require("../controllers/utilisateurController");
const requireAuth = require("../middlewares/authMiddleware");

//private routes

// Créer un nouvel utilisateur
router.post("/", requireAuth,utilisateursController.createUtilisateur);

// Récupérer tous les utilisateurs
router.get("/",requireAuth, utilisateursController.getAllUtilisateurs);
    


// Récupérer un utilisateur par ID
router.get("/:id",requireAuth, utilisateursController.getUtilisateurById);

    

// UPDATE - update utilisateur by ID
router.put("/:id",requireAuth,utilisateursController.updateUtilisateurById);
  
// DELETE - delete utilisateur by ID

router.delete("/:id",requireAuth, utilisateursController.deleteUtilisateurById);
  
module.exports = router;



