const { Sequelize } = require('sequelize');

// Configuration de la connexion à la base de données MySQL via Sequelize
// NOTE: Les identifiants sont codés en dur ici (utile en développement).
// Dans un environnement de production, utiliser des variables d'environnement
// ou un gestionnaire de secrets pour éviter d'exposer les informations.
const sequelize = new Sequelize(
  'employee_db',   // nom de la base de données
  'root',          // utilisateur MySQL
  'UCadmin230',    // mot de passe MySQL (à protéger en production)
  {
    host: 'localhost',
    dialect: 'mysql',
    logging: false // désactive le logging SQL pour garder la console propre
  }
);

module.exports = sequelize;