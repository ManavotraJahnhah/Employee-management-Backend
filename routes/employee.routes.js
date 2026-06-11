const router = require("express").Router();
const employeeController = require("../controllers/employee.controller");

/**
 * @swagger
 * /employees:
 *   get:
 *     summary: Get all employees
 *     tags:
 *       - Employees
 *     responses:
 *       200:
 *         description: List of employees
 */
router.get("/", employeeController.getAllEmployees);

/**
 * @swagger
 * /employees/{id}:
 *   get:
 *     summary: Get employee by ID
 *     tags:
 *       - Employees
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Employee found
 *       404:
 *         description: Employee not found
 */
router.get("/:id", employeeController.getEmployeeById);

/**
 * @swagger
 * /employees:
 *   post:
 *     summary: Create a new employee
 *     tags:
 *       - Employees
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Employee created
 */
router.post("/", employeeController.createEmployee);

/**
 * @swagger
 * /employees/{id}:
 *   put:
 *     summary: Update an employee
 *     tags:
 *       - Employees
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
 *         description: Employee updated
 *       404:
 *         description: Employee not found
 */
router.put("/:id", employeeController.updateEmployee);

/**
 * @swagger
 * /employees/{id}:
 *   delete:
 *     summary: Delete an employee
 *     tags:
 *       - Employees
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Employee deleted
 *       404:
 *         description: Employee not found
 */
router.delete("/:id", employeeController.deleteEmployee);
router.get("/check-code/:employeeCode", employeeController.checkEmployeeCode);

module.exports = router;
