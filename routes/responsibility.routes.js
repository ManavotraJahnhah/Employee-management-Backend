const router = require("express").Router();
const responsibilityController = require("../controllers/responsibility.controller");

/**
 * @swagger
 * /responsibilities:
 *   get:
 *     summary: Get all responsibilities
 *     tags:
 *       - Responsibilities
 *     responses:
 *       200:
 *         description: List of responsibilities
 */
router.get("/", responsibilityController.getAllResponsibilities);

/**
 * @swagger
 * /responsibilities/{id}:
 *   get:
 *     summary: Get responsibility by ID
 *     tags:
 *       - Responsibilities
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Responsibility found
 *       404:
 *         description: Responsibility not found
 */
router.get("/:id", responsibilityController.getResponsibilityById);

/**
 * @swagger
 * /responsibilities:
 *   post:
 *     summary: Create a new responsibility
 *     tags:
 *       - Responsibilities
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Responsibility created
 */
router.post("/", responsibilityController.createResponsibility);

/**
 * @swagger
 * /responsibilities/{id}:
 *   put:
 *     summary: Update a responsibility
 *     tags:
 *       - Responsibilities
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Responsibility updated
 *       404:
 *         description: Responsibility not found
 */
router.put("/:id", responsibilityController.updateResponsibility);

/**
 * @swagger
 * /responsibilities/{id}:
 *   delete:
 *     summary: Delete a responsibility
 *     tags:
 *       - Responsibilities
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Responsibility deleted
 *       404:
 *         description: Responsibility not found
 */
router.delete("/:id", responsibilityController.deleteResponsibility);

module.exports = router;
