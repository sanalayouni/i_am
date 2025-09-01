const mongoose = require("mongoose");
const utilisateursSchema = new mongoose.Schema({
  nom: String,
  prenom: String,
  email: String,
  motdepass: String,
  profileImage: String,
  // Wallet (favorites)
  favorites: [{
    itemId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    },
    itemType: {
      type: String,
      enum: ["entreprises", "personnes"], 
      required: true
    },
    addedAt: {
      type: Date,
      default: Date.now
    }
  }]
});
module.exports = mongoose.model("utilisateurs", utilisateursSchema);


