module.exports = (sequelize, DataTypes) => {
  const Responsibility = sequelize.define('Responsibility', {
    name: DataTypes.STRING
  });

  return Responsibility;
};