module.exports = (sequelize, DataTypes) => {
  // Table de jonction pour la relation many-to-many Employee <-> Responsibility
  // Pas de champs supplémentaires ; on désactive les timestamps pour garder la table légère
  const EmployeeResponsibility = sequelize.define(
    'EmployeeResponsibility',
    {},
    { timestamps: false }
  );

  return EmployeeResponsibility;
};