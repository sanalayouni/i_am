const express = require("express");
const router = express.Router();
const Entreprise = require("../models/entreprises");



//  get all entreprises
router.get("/entreprises", async (req, res) => {
  try {
    const entreprises = await Entreprise.find().populate("director").populate("members");
    res.json(entreprises);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// CREATE - add new entreprise
router.post("/entreprises", async (req, res) => {
  try {
    const entreprise = new Entreprise(req.body);
    console.log(req.body)
    const savedEntreprise = await entreprise.save();
    res.status(201).json(savedEntreprise);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// READ - get entreprise by ID
router.get("/entreprises/:id", async (req, res) => {
  try {
    const entreprise = await Entreprise.findById(req.params.id).populate("director").populate("members");
    if (!entreprise) return res.status(404).json({ message: "Entreprise not found" });
    res.json(entreprise);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// UPDATE - update entreprise by ID
router.put("/entreprises/:id", async (req, res) => {
  try {
    const updatedEntreprise = await Entreprise.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedEntreprise) return res.status(404).json({ message: "Entreprise not found" });
    res.json(updatedEntreprise);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE - delete entreprise by ID
router.delete("/entreprises/:id", async (req, res) => {
  try {
    const deletedEntreprise = await Entreprise.findByIdAndDelete(req.params.id);
    if (!deletedEntreprise) return res.status(404).json({ message: "Entreprise not found" });
    res.json({ message: "Entreprise deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
