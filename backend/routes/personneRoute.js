const express = require("express");
const router = express.Router();
const Personne = require("../models/personnes");
const personneController = require("../controllers/personneController");
const {requireAuth,requireAdmin} = require("../middlewares/authMiddleware");// pour les routes privées
//const requireAdmin = require("../middleware/requireAdmin");// pour les routes admin



//public routes

// READ - get all personnes
router.get("/", personneController.getAllPersonnes);

// SEARCH - search personnes by name, number,email
router.get("/search", personneController.searchPersonnes);
  

// READ - get personne by ID
router.get("/:id", personneController.getPersonneById);

//private routes
// CREATE - add new personne
router.post("/",requireAuth,requireAdmin, personneController.createPersonne);
  
// UPDATE - update personne by ID
router.put("/:id", requireAuth,requireAdmin,personneController.updatePersonneById);
  

// DELETE - delete personne by ID
router.delete("/:id", requireAuth,requireAdmin,personneController.deletePersonneById);
  
module.exports = router;
