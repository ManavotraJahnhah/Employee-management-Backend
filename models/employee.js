module.exports = (sequelize, DataTypes) => {
  // Modèle Employee : représente un employé dans l'application
  // Champs principaux : nom, prénom, salaire journalier, mode de versement et date de naissance
  const Employee = sequelize.define('Employee', {
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    dailySalary: DataTypes.DECIMAL(10, 2), // montant avec 2 décimales
    salaryHandling: DataTypes.STRING, // ex: 'Bank' | 'Cash' | 'Other'
    dateOfBirth: DataTypes.DATE
  });

  return Employee;
};