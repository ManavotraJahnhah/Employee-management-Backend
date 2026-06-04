const sequelize = require('../config/database');
const { DataTypes } = require('sequelize');

// Import des définitions de modèles en injectant l'instance Sequelize
const Employee = require('./employee')(sequelize, DataTypes);
const Department = require('./department')(sequelize, DataTypes);
const Responsibility = require('./responsibility')(sequelize, DataTypes);
const EmployeeResponsibility = require('./employeeResponsibility')(sequelize, DataTypes);

// Associations Sequelize
// Department → Employee (1:N)
// Un département peut contenir plusieurs employés. Sequelize ajoute la clé
// étrangère `DepartmentId` dans le modèle Employee.
Department.hasMany(Employee);
Employee.belongsTo(Department);

// Employee ↔ Responsibility (N:M)
// Relation plusieurs-à-plusieurs via la table de jonction EmployeeResponsibility
Employee.belongsToMany(Responsibility, {
  through: EmployeeResponsibility
});

Responsibility.belongsToMany(Employee, {
  through: EmployeeResponsibility
});

// Export des modèles et de l'instance Sequelize pour être utilisés ailleurs
module.exports = {
  sequelize,
  Employee,
  Department,
  Responsibility,
  EmployeeResponsibility
};