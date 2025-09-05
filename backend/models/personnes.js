const mongoose = require("mongoose");
const QRCode = require("qrcode");

const personnesSchema = new mongoose.Schema(
  {
    nom: { type: String, required: true, trim: true },
    prenom:  { type: String, required: true, trim: true },
    poste:  { type: String, required: true, trim: true }, 
    entreprise:   { type: mongoose.Schema.Types.ObjectId, ref: "entreprises" },
    telephone:     { type: String, trim: true },
    email:     { type: String, trim: true, lowercase: true },
    localisation:  { type: String, trim: true },                
    profileImage: String,
    qrCode: String,// Store QR code as base64 string
    verified: { type: Boolean, default: false },
    socialLinks: {
      facebook: String,
      whatsapp: String,
      linkedin: String,
    },
      },
  { timestamps: true }
);
module.exports = mongoose.model("personnes", personnesSchema);
