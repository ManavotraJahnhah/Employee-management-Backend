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

  Employee.beforeSave(async (employee) => {
    // Validate Department
    // Validate Responsibilities

    if (!employee.employeeCode) {
      const count = await Employee.count();
      employee.employeeCode = `EMP${String(count + 1).padStart(4, "0")}`;
    }
  });

  return Employee;
};