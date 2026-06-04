const { Responsibility } = require("../models");

exports.getAllResponsibilities = async () => {
  return await Responsibility.findAll();
};

exports.getResponsibilityById = async (id) => {
  return await Responsibility.findByPk(id);
};

exports.createResponsibility = async (data) => {
  return await Responsibility.create(data);
};

exports.updateResponsibility = async (id, data) => {
  const r = await Responsibility.findByPk(id);
  if (!r) return null;
  await r.update(data);
  return r;
};

exports.deleteResponsibility = async (id) => {
  return await Responsibility.destroy({ where: { id } });
};
