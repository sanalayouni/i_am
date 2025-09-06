//import model

const Personne = require("../models/personnes");
const generateVCard = require("../utils/VCard");
// Create and Save a new Personne
exports.createPersonne = async (req, res) => {
  try {
      const personne = new Personne(req.body);
      const savedPersonne = await personne.save();
      //  Generate vCard QR Code after saving person
    const qrCodeImage = await generateVCard(savedPersonne);
    // Save QR code in DB
    savedPersonne.qrCode = qrCodeImage;
    await savedPersonne.save();

    // Send response with both person data & QR code
    res.status(201).json({ 
      message: "Personne ajoutée",
      savedPersonne,
      qrCode: qrCodeImage
    });
      
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
    // Step 1: Find the existing person
    const personne = await Personne.findById(req.params.id);
    if (!personne) {
      return res.status(404).json({ message: "Personne not found" });
    }

    // Step 2: Update fields from req.body
    Object.assign(personne, req.body);

    // Step 3: Generate the QR Code
    const qrCodeImage = await generateVCard(personne);
    personne.qrCode = qrCodeImage;

    // Step 4: Save only once
    const updatedPersonne = await personne.save();

    res.json({
      message: "Personne modifiée",
      updatedPersonne,
      
    });
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

