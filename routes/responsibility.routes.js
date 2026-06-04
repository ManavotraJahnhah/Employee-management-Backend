const router = require("express").Router();
const responsibilityController = require("../controllers/responsibility.controller");

// Routes CRUD pour les responsabilités
router.get("/", responsibilityController.getAllResponsibilities);
router.get("/:id", responsibilityController.getResponsibilityById);
router.post("/", responsibilityController.createResponsibility);
router.put("/:id", responsibilityController.updateResponsibility);
router.delete("/:id", responsibilityController.deleteResponsibility);

module.exports = router;
