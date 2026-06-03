const sequelize = require('../config/database');
const { DataTypes } = require('sequelize');

const Employee = require('./employee')(sequelize, DataTypes);
const Department = require('./department')(sequelize, DataTypes);
const Responsibility = require('./responsibility')(sequelize, DataTypes);
const EmployeeResponsibility = require('./employeeResponsibility')(sequelize, DataTypes);

// Department → Employee (1 to many)
Department.hasMany(Employee);
Employee.belongsTo(Department);

// Employee ↔ Responsibility (many to many)
Employee.belongsToMany(Responsibility, {
  through: EmployeeResponsibility
});

Responsibility.belongsToMany(Employee, {
  through: EmployeeResponsibility
});

module.exports = {
  sequelize,
  Employee,
  Department,
  Responsibility,
  EmployeeResponsibility
};