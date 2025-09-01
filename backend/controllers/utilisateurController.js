//import model
const Utilisateur = require("../models/utilisateurs");
// Créer un nouvel utilisateur

exports.createUtilisateur = async (req, res) => {
try {
        const utilisateur = new Utilisateur(req.body);
        await utilisateur.save();
        res.status(201).send(utilisateur);
    } catch (error) {
        res.status(400).send(error);
    }
};


// Récupérer tous les utilisateurs
exports.getAllUtilisateurs = async (req, res) => {
    try {
        const utilisateurs = await Utilisateur.find();
        res.send(utilisateurs);
    }
    catch (error) {
        res.status(500).send(error);
    }
};

// Récupérer un utilisateur par ID
exports.getUtilisateurById = async (req, res) => {
try {
        const utilisateur = await Utilisateur.findById(req.params.id);  
        if (!utilisateur) {
            return res.status(404).send();
        }
        res.send(utilisateur);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Mettre à jour un utilisateur par ID
exports.updateUtilisateurById = async (req, res) => {
    try {
    const utilisateur = await Utilisateur.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!utilisateur) {
      return res.status(404).json({ message: "Utilisateur not found" });
    }

    res.json(utilisateur);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Supprimer un utilisateur par ID
exports.deleteUtilisateurById = async (req, res) => {
    try {
    const utilisateur = await Utilisateur.findByIdAndDelete(req.params.id);
    if (!utilisateur) {
      return res.status(404).json({ message: "Utilisateur not found" });
    }
    res.json({ message: "Utilisateur deleted successfully", utilisateur });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};