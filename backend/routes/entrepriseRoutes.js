const express = require("express");
const router = express.Router();
const entrepriseController = require("../controllers/entrepriseController");
const {requireAuth,requireAdmin} = require("../middlewares/authMiddleware");
//const requireAdmin = require("../middleware/requireAdmin");

// Public routes
router.get("/", entrepriseController.getAllEntreprises);
router.get("/:id", entrepriseController.getEntrepriseById);

// Private routes (protected by middleware)
router.post("/", requireAuth,requireAdmin, entrepriseController.addEntreprise);
router.put("/:id", requireAuth,requireAdmin, entrepriseController.updateEntreprise);
router.delete("/:id", requireAuth,requireAdmin, entrepriseController.deleteEntreprise);

module.exports = router;
