const express = require("express");
const router = express.Router();
const Personne = require("../models/personnes");
const personneController = require("../controllers/personneController");
// CREATE - add new personne
router.post("/",personneController.createPersonne);
  

// READ - get all personnes
router.get("/", personneController.getAllPersonnes);
  

// READ - get personne by ID
router.get("/:id", personneController.getPersonneById);
  

// UPDATE - update personne by ID
router.put("/:id", personneController.updatePersonneById);
  

// DELETE - delete personne by ID
router.delete("/:id", personneController.deletePersonneById);
  
module.exports = router;
