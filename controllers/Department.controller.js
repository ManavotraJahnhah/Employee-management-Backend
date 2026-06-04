const departmentService = require('../services/department.service');

exports.getAllDepartments = async (req, res) => {
  try {
    const departments = await departmentService.getAllDepartments();
    res.json(departments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getDepartmentById = async (req, res) => {
  try {
    const dept = await departmentService.getDepartmentById(req.params.id);
    if (!dept) return res.status(404).json({ message: 'Department not found' });
    res.json(dept);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createDepartment = async (req, res) => {
  try {
    const dept = await departmentService.createDepartment(req.body);
    res.status(201).json(dept);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateDepartment = async (req, res) => {
  try {
    const updated = await departmentService.updateDepartment(req.params.id, req.body);
    if (!updated) return res.status(404).json({ message: 'Department not found' });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteDepartment = async (req, res) => {
  try {
    const deleted = await departmentService.deleteDepartment(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Department not found' });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
