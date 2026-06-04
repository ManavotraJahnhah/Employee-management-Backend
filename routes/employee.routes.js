const router = require('express').Router();
const employeeController = require('../controllers/employee.controller');

// Routes pour la ressource Employee
// GET    /employees        -> getAllEmployees
// GET    /employees/:id    -> getEmployeeById
// POST   /employees        -> createEmployee
// PUT    /employees/:id    -> updateEmployee
// DELETE /employees/:id    -> deleteEmployee
router.get('/', employeeController.getAllEmployees);
router.get('/:id', employeeController.getEmployeeById);
router.post('/', employeeController.createEmployee);
router.put('/:id', employeeController.updateEmployee);
router.delete('/:id', employeeController.deleteEmployee);

module.exports = router;