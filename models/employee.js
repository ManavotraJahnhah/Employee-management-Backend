module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    dailySalary: DataTypes.DECIMAL(10, 2),
    salaryHandling: DataTypes.STRING,
    dateOfBirth: DataTypes.DATE
  });

  return Employee;
};