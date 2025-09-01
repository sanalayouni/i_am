const mongoose = require("mongoose");

const entreprisesSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  intro: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  rne: {
    type: String,
    trim: true
  },
  vatNombre: {
    type: String,
    trim: true
  },
  DetailsDuBank: {
    type: String,
    trim: true
  },
  // Directeur lié au modèle "Personnes"
  director: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "personnes"
  },
  email: {
    type: String,
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    trim: true
  },
  localisation: {
    type: String,
    trim: true
  },
  // Membres liés au modèle "Personnes"
  members: [{
    person: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "personnes"
    },
    poste: {
      type: String,
      default: "Employé",
      trim: true
    }
  }],
  verified: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("Entreprises", entreprisesSchema);
