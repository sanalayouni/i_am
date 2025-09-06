require('dotenv').config();
console.log("JWT SECRET:", process.env.SECRET);
const express = require('express')
const connectDB = require("./config/db");
const Personnes = require("./models/personnes");
const QRCode = require('qrcode');
const app = express()
const port = 3000
//import routes
const entreprisesRoutes = require("./routes/entrepriseRoutes");
const personnesRoutes = require("./routes/personneRoute");
const userRoutes = require("./routes/user");
// Connect Database
connectDB();
app.use(express.json()); // allow JSON body parsing
app.use("i_am/api/entreprises", entreprisesRoutes);
app.use("i_am/api/personnes", personnesRoutes);
app.use("i_am/api/user", userRoutes);

app.get("/", async (req, res) => {
  try {
    const p = new Personnes({
      nom: "Marie",
      prenom: "Leroy",
      poste: "Directrice Marketing",
      localisation: "France, Nice",
      telephone: "94541894", // Add these fields to your model
      email: "Marie.Leroy@example.com"
    });

    const savedPerson = await p.save();

    // Create vCard format - this is what goes IN the QR code
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:${savedPerson.prenom} ${savedPerson.nom}
N:${savedPerson.nom};${savedPerson.prenom};;;
ORG:${savedPerson.poste}
TITLE:${savedPerson.poste}
TEL;TYPE=CELL:${savedPerson.telephone}
TEL;TYPE=WORK:${savedPerson.telephone}
EMAIL;TYPE=WORK:${savedPerson.email}
EMAIL;TYPE=INTERNET:${savedPerson.email}
ADR;TYPE=WORK:;;${savedPerson.localisation};;;;
URL:https://www.example.com
NOTE:Contact ajouté via QR Code
END:VCARD`;

    // Generate QR code with vCard data (not URL!)
    const qrCodeImage = await QRCode.toDataURL(vCardData);
        
    res.send(`
      
        <h3>📱 Scan this QR Code to add contact:</h3>
        <img src="${qrCodeImage}" alt="vCard QR Code" style="max-width: 300px; border: 2px solid #ddd; padding: 20px; border-radius: 10px;" />
    `);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating person");
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
