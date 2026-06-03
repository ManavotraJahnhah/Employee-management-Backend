module.exports = (sequelize, DataTypes) => {
  const EmployeeResponsibility = sequelize.define(
    'EmployeeResponsibility',
    {},
    { timestamps: false }
  );

  return EmployeeResponsibility;
};