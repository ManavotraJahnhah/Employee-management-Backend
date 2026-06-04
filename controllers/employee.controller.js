const employeeService = require('../services/employee.service');

exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await employeeService.getAllEmployees();

    res.json(employees);
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

exports.getEmployeeById = async (req, res) => {
  try {
    const employee = await employeeService.getEmployeeById(
      req.params.id
    );

    if (!employee) {
      return res.status(404).json({
        message: 'Employee not found'
      });
    }

    res.json(employee);
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

exports.createEmployee = async (req, res) => {
  try {
    const employee = await employeeService.createEmployee(
      req.body
    );

    res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

exports.updateEmployee = async (req, res) => {
  try {
    const employee = await employeeService.updateEmployee(
      req.params.id,
      req.body
    );

    if (!employee) {
      return res.status(404).json({
        message: 'Employee not found'
      });
    }

    res.json(employee);
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

exports.deleteEmployee = async (req, res) => {
  try {
    const deleted = await employeeService.deleteEmployee(
      req.params.id
    );

    if (!deleted) {
      return res.status(404).json({
        message: 'Employee not found'
      });
    }

    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};