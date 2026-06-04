const departmentService = require("../services/department.service");

// Contrôleur Department : endpoints CRUD pour les départements

// GET /departments - retourne la liste des départements
exports.getAllDepartments = async (req, res) => {
  try {
    const departments = await departmentService.getAllDepartments();
    res.json(departments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET /departments/:id - retourne un département par son id
exports.getDepartmentById = async (req, res) => {
  try {
    const dept = await departmentService.getDepartmentById(req.params.id);
    if (!dept) return res.status(404).json({ message: "Department not found" });
    res.json(dept);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// POST /departments - crée un nouveau département
exports.createDepartment = async (req, res) => {
  try {
    const dept = await departmentService.createDepartment(req.body);
    res.status(201).json(dept);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// PUT /departments/:id - met à jour un département existant
exports.updateDepartment = async (req, res) => {
  try {
    const updated = await departmentService.updateDepartment(
      req.params.id,
      req.body,
    );
    if (!updated)
      return res.status(404).json({ message: "Department not found" });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE /departments/:id - supprime un département
exports.deleteDepartment = async (req, res) => {
  try {
    const deleted = await departmentService.deleteDepartment(req.params.id);
    if (!deleted)
      return res.status(404).json({ message: "Department not found" });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
