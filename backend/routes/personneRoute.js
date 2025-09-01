const express = require("express");
const router = express.Router();
const Personne = require("../models/personnes");

// CREATE - add new personne
router.post("/personnes", async (req, res) => {
  try {
    const personne = new Personne(req.body);
    const savedPersonne = await personne.save();
    res.status(201).json(savedPersonne);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// READ - get all personnes
router.get("/personnes", async (req, res) => {
  try {
    const personnes = await Personne.find();
    res.json(personnes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// READ - get personne by ID
router.get("personnes/:id", async (req, res) => {
  try {
    const personne = await Personne.findById(req.params.id);
    console.log(personne);
    if (!personne) return res.status(404).json({ message: "Personne not found" });
    res.json(personne);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// UPDATE - update personne by ID
router.put("personnes/:id", async (req, res) => {
  try {
    const updatedPersonne = await Personne.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPersonne) return res.status(404).json({ message: "Personne not found" });
    res.json(updatedPersonne);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE - delete personne by ID
router.delete("personnes/:id", async (req, res) => {
  try {
    const deletedPersonne = await Personne.findByIdAndDelete(req.params.id);
    if (!deletedPersonne) return res.status(404).json({ message: "Personne not found" });
    res.json({ message: "Personne deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
