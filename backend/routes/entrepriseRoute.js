const express = require("express");
const router = express.Router();
const Entreprise = require("../models/entreprises");
const entrepriseController = require("../controllers/entrepriseController");



//  get all entreprises
router.get("/", entrepriseController.getAllEntreprises);
  

// CREATE - add new entreprise
router.post("/", entrepriseController.addEntreprise);
  

// READ - get entreprise by ID
router.get("/:id", entrepriseController.getAllEntreprises);
  

// UPDATE - update entreprise by ID
router.put("/:id", entrepriseController.updateEntreprise);


// DELETE - delete entreprise by ID
router.delete("/:id", entrepriseController.deleteEntreprise);
  

module.exports = router;
