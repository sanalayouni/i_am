//import model

const Personne = require("../models/personnes");

// Create and Save a new Personne
exports.createPersonne = async (req, res) => {
  try {
      const personne = new Personne(req.body);
      const savedPersonne = await personne.save();
      res.status(201).json({ message:"personne ajouteé",savedPersonne});
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
// Retrieve and return all personnes from the database 
  exports.getAllPersonnes = async (req, res) => {
  try {
      const personnes = await Personne.find();
      res.json(personnes);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  // Find a single personne with a personneId
  exports.getPersonneById = async (req, res) => {
    try {
        const personne = await Personne.findById(req.params.id);
        console.log(personne);
        if (!personne) return res.status(404).json({ message: "Personne not found" });
        res.json(personne);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  };
  // Update a personne identified by the personneId in the request
  exports.updatePersonneById = async (req, res) => {
    try {
        const updatedPersonne = await Personne.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedPersonne) return res.status(404).json({ message: "Personne not found" });
        res.json({ message:"personne modifieé",updatedPersonne});
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    };
  // Delete a personne with the specified personneId in the request
  exports.deletePersonneById = async (req, res) => {
    try {
    const deletedPersonne = await Personne.findByIdAndDelete(req.params.id);
    if (!deletedPersonne) return res.status(404).json({ message: "Personne not found" });
    res.json({ message: "Personne deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

