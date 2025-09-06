const express = require("express");
const router = express.Router();
const Utilisateur = require("../models/utilisateurs");
const utilisateursController = require("../controllers/utilisateurController");
const {requireAuth,requireAdmin} = require("../middlewares/authMiddleware");


//private routes

// Créer un nouvel utilisateur
router.post("/", requireAuth,requireAdmin,utilisateursController.createUtilisateur);

// Récupérer tous les utilisateurs
router.get("/",requireAuth,requireAdmin, utilisateursController.getAllUtilisateurs);
    


// Récupérer un utilisateur par ID
router.get("/:id",requireAuth,requireAdmin, utilisateursController.getUtilisateurById);

    

// UPDATE - update utilisateur by ID
router.put("/:id",requireAuth,requireAdmin,utilisateursController.updateUtilisateurById);
  
// DELETE - delete utilisateur by ID

router.delete("/:id",requireAuth,requireAdmin, utilisateursController.deleteUtilisateurById);
  
module.exports = router;



