const router = require('express').Router();
const { Employee, Department, Responsibility } = require('../models');

// GET all employees
router.get('/', async (req, res) => {
  const employees = await Employee.findAll({
    include: [Department, Responsibility]
  });

  res.json(employees);
});

// CREATE employee
router.post('/', async (req, res) => {
  try {
    const { responsibilities, departmentId, ...empData } = req.body;

    const employee = await Employee.create({
      ...empData,
      DepartmentId: departmentId
    });

    if (responsibilities?.length) {
      const reps = await Responsibility.findAll({
        where: { id: responsibilities }
      });

      await employee.setResponsibilities(reps);
    }

    res.json(employee);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;