//import model
const Entreprise = require("../models/entreprises");

//add entreprise
exports.addEntreprise = async (req, res) => {
 
    try {
        const entreprise = new Entreprise(req.body);
        console.log(req.body)
        const savedEntreprise = await entreprise.save();
        res.status(201).json(savedEntreprise);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    };

//get all entreprises
exports.getAllEntreprises = async (req, res) => {
    try {
        const entreprises = await Entreprise.find().populate("director").populate("members");
        res.json(entreprises);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    };


 //get entreprise by ID
exports.getEntrepriseById = async (req, res) => {
        try {
        const entreprise = await Entreprise.findById(req.params.id).populate("director").populate("members");
        if (!entreprise) return res.status(404).json({ message: "Entreprise not found" });
        res.json(entreprise);
        } catch (error) {   
        res.status(500).json({ message: error.message });
        }
    };   

//update entreprise by ID

exports.updateEntreprise = async (req, res) => {
      try {
    const updatedEntreprise = await Entreprise.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedEntreprise) return res.status(404).json({ message: "Entreprise not found" });
    res.json(updatedEntreprise);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
    
//delete entreprise by ID
exports.deleteEntreprise = async (req, res) => {
    try {
    const deletedEntreprise = await Entreprise.findByIdAndDelete(req.params.id);
    if (!deletedEntreprise) return res.status(404).json({ message: "Entreprise not found" });
    res.json({ message: "Entreprise deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Search personnes by name, telephone, or email
exports.searchEntreprise = async (req, res) => {
  try {
    const { nom,telephone, email } = req.query;

    // Build dynamic query object
    const query = {};
    if (nom) query.nom = new RegExp(nom, "i"); // case-insensitive partial match
    if (telephone) query.telephone = new RegExp(telephone, "i");
    if (email) query.email = new RegExp(email, "i");

    const results = await Entreprise.find(query);
    res.json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
