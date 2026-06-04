module.exports = (sequelize, DataTypes) => {
  // Modèle Department : représente une unité organisationnelle
  // Champ `name` : nom du département (ex : IT, Finance, HR)
  const Department = sequelize.define('Department', {
    name: DataTypes.STRING
  });

  return Department;
};