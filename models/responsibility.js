module.exports = (sequelize, DataTypes) => {
  // Modèle Responsibility : représente une responsabilité / compétence
  // Utilisé dans une relation plusieurs-à-plusieurs avec Employee
  const Responsibility = sequelize.define('Responsibility', {
    name: DataTypes.STRING
  });

  return Responsibility;
};