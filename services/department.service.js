const { Department } = require("../models");

// Service Department : logique métier pour gérer les départements

exports.getAllDepartments = async () => {
  // Retourne tous les départements sans relations (léger)
  return await Department.findAll();
};

exports.getDepartmentById = async (id) => {
  return await Department.findByPk(id);
};

exports.createDepartment = async (data) => {
  // Création simple d'un département
  return await Department.create(data);
};

exports.updateDepartment = async (id, data) => {
  const dept = await Department.findByPk(id);
  if (!dept) return null; // signaler l'absence
  await dept.update(data);
  return dept;
};

exports.deleteDepartment = async (id) => {
  return await Department.destroy({ where: { id } });
};
