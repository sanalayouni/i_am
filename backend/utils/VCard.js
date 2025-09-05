const QRCode = require("qrcode");

async function generateVCard(person) {
  const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:${person.prenom} ${person.nom}
N:${person.nom};${person.prenom};;;
ORG:${person.poste}
TITLE:${person.poste}
TEL;TYPE=CELL:${person.telephone}
TEL;TYPE=WORK:${person.telephone}
EMAIL;TYPE=WORK:${person.email}
EMAIL;TYPE=INTERNET:${person.email}
ADR;TYPE=WORK:;;${person.localisation};;;;
URL:https://www.example.com
NOTE:Contact ajouté via QR Code
END:VCARD`;

  // Return QR code as base64 data URL
  return await QRCode.toDataURL(vCardData);
}

module.exports = generateVCard;
