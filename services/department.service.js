const { Department } = require("../models");

exports.getAllDepartments = async () => {
  return await Department.findAll();
};

exports.getDepartmentById = async (id) => {
  return await Department.findByPk(id);
};

exports.createDepartment = async (data) => {
  return await Department.create(data);
};

exports.updateDepartment = async (id, data) => {
  const dept = await Department.findByPk(id);
  if (!dept) return null;
  await dept.update(data);
  return dept;
};

exports.deleteDepartment = async (id) => {
  return await Department.destroy({ where: { id } });
};
