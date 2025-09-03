const express = require("express");
const router = express.Router();
const entrepriseController = require("../controllers/entrepriseController");
const requireAuth = require("../middlewares/authMiddleware");

// Public routes
router.get("/", entrepriseController.getAllEntreprises);
router.get("/:id", entrepriseController.getEntrepriseById);

// Private routes (protected by middleware)
router.post("/", requireAuth, entrepriseController.addEntreprise);
router.put("/:id", requireAuth, entrepriseController.updateEntreprise);
router.delete("/:id", requireAuth, entrepriseController.deleteEntreprise);

module.exports = router;
