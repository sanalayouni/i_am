const express = require("express");
const router = express.Router();
const Personne = require("../models/personnes");
const personneController = require("../controllers/personneController");
const requireAuth = require("../middlewares/authMiddleware");



//public routes

// READ - get all personnes
router.get("/", personneController.getAllPersonnes);

// READ - get personne by ID
router.get("/:id", personneController.getPersonneById);
  
//private routes
// CREATE - add new personne
router.post("/",requireAuth, personneController.createPersonne);
  
// UPDATE - update personne by ID
router.put("/:id", requireAuth,personneController.updatePersonneById);
  

// DELETE - delete personne by ID
router.delete("/:id", requireAuth,personneController.deletePersonneById);
  
module.exports = router;
