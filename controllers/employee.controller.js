const employeeService = require("../services/employee.service");
const { Employee } = require("../models");
const { Op } = require("sequelize");
// Contrôleur Employee : traduit les requêtes HTTP en appels de service

// Récupère la liste complète des employés (GET /employees)
exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await employeeService.getAllEmployees();

    res.json(employees);
  } catch (error) {
    // Erreur serveur : renvoyer le message d'erreur
    res.status(500).json({
      error: error.message,
    });
  }
};

// Récupère un employé par son identifiant (GET /employees/:id)
exports.getEmployeeById = async (req, res) => {
  try {
    const employee = await employeeService.getEmployeeById(req.params.id);

    if (!employee) {
      // Si l'employé n'existe pas, renvoyer 404
      return res.status(404).json({
        message: "Employee not found",
      });
    }

    res.json(employee);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// Crée un nouvel employé (POST /employees)
// Le corps de la requête doit contenir les champs attendus par le service
exports.createEmployee = async (req, res) => {
  try {
    const employee = await employeeService.createEmployee(req.body);

    // Création réussie -> 201 Created
    res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// Met à jour un employé existant (PUT /employees/:id)
exports.updateEmployee = async (req, res) => {
  try {
    const employee = await employeeService.updateEmployee(
      req.params.id,
      req.body,
    );

    if (!employee) {
      // Si l'employé n'existe pas, renvoyer 404
      return res.status(404).json({
        message: "Employee not found",
      });
    }

    res.json(employee);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// Supprime un employé (DELETE /employees/:id)
exports.deleteEmployee = async (req, res) => {
  try {
    const deleted = await employeeService.deleteEmployee(req.params.id);

    if (!deleted) {
      return res.status(404).json({
        message: "Employee not found",
      });
    }

    // Suppression réussie -> 204 No Content
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

exports.checkEmployeeCode = async (req, res) => {
  try {
    let { employeeCode, employeeId } = req.params;

    employeeCode = employeeCode.trim().toUpperCase();

    const where = { employeeCode };

    if (employeeId) {
      where.id = {
        [Op.ne]: employeeId,
      };
    }

    const employee = await Employee.findOne({ where });

    return res.json({
      available: !employee,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};