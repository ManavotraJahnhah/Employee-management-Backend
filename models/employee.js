module.exports = (sequelize, DataTypes) => {
  // Modèle Employee : représente un employé dans l'application
  // Champs principaux : nom, prénom, salaire journalier, mode de versement et date de naissance
  const Employee = sequelize.define("Employee", {
    employeeCode: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    dailySalary: DataTypes.DECIMAL(10, 2), // montant avec 2 décimales
    salaryHandling: DataTypes.STRING, // ex: 'Bank' | 'Cash' | 'Other'
    dateOfBirth: DataTypes.DATE,
  });

  const { Department } = require("./department");

  Employee.beforeValidate(async (employee) => {
    if (employee.DepartmentId) {
      const department = await Department.findByPk(employee.DepartmentId);

      if (!department) {
        throw new Error("Department does not exist.");
      }
    }

    // employeeCode generation stays here
    if (!employee.employeeCode) {
      const last = await Employee.findOne({
        order: [["createdAt", "DESC"]],
      });

      let nextNumber = 1;

      if (last?.employeeCode) {
        const num = parseInt(last.employeeCode.replace("EMP", ""));
        nextNumber = num + 1;
      }

      employee.employeeCode = `EMP${String(nextNumber).padStart(4, "0")}`;
    }
  });

  Employee.beforeSave(async (employee) => {
    if (employee.DepartmentId) {
      const department = await Department.findByPk(employee.DepartmentId);

      if (!department) {
        throw new Error("Department does not exist.");
      }
    }
  });
  return Employee;
};
