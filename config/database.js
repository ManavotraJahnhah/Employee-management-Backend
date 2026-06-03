const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'employee_db',   // DB name
  'root',          // MySQL username
  'UCadmin230',      // MySQL password
  {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
  }
);

module.exports = sequelize;