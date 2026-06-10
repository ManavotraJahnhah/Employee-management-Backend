const router = require("express").Router();
const departmentController = require("../controllers/department.controller");

/**
 * @swagger
 * /departments:
 *   get:
 *     summary: Get all departments
 *     tags:
 *       - Departments
 *     responses:
 *       200:
 *         description: List of departments
 */
router.get("/", departmentController.getAllDepartments);

/**
 * @swagger
 * /departments/{id}:
 *   get:
 *     summary: Get department by ID
 *     tags:
 *       - Departments
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Department found
 *       404:
 *         description: Department not found
 */
router.get("/:id", departmentController.getDepartmentById);

/**
 * @swagger
 * /departments:
 *   post:
 *     summary: Create a new department
 *     tags:
 *       - Departments
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Department created
 */
router.post("/", departmentController.createDepartment);

/**
 * @swagger
 * /departments/{id}:
 *   put:
 *     summary: Update a department
 *     tags:
 *       - Departments
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
 *         description: Department updated
 *       404:
 *         description: Department not found
 */
router.put("/:id", departmentController.updateDepartment);

/**
 * @swagger
 * /departments/{id}:
 *   delete:
 *     summary: Delete a department
 *     tags:
 *       - Departments
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Department deleted
 *       404:
 *         description: Department not found
 */
router.delete("/:id", departmentController.deleteDepartment);

module.exports = router;
