require('dotenv').config();
console.log("JWT SECRET:", process.env.SECRET);
const express = require('express')
const connectDB = require("./config/db");
const Personnes = require("./models/personnes");
const QRCode = require('qrcode');
const app = express()
const port = process.env.PORT || 3000;
//import routes
const entreprisesRoutes = require("./routes/entrepriseRoutes");
const personnesRoutes = require("./routes/personneRoute");
const userRoutes = require("./routes/user");
// Connect Database
connectDB();
app.use(express.json()); // allow JSON body parsing
app.use("/i_am/entreprises", entreprisesRoutes);
app.use("/i_am/personnes", personnesRoutes);
app.use("/i_am/user", userRoutes);



app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running at http://0.0.0.0:${port}`);
});

