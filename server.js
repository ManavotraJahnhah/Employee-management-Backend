const express = require("express");
const cors = require("cors");
const { sequelize } = require("./models");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

const app = express();

// Configuration des middlewares express
app.use(cors());
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Route de test simple pour vérifier que l'API répond
app.get("/", (req, res) => {
  // Cette route permet de vérifier rapidement que le serveur est démarré
  res.send("API running");
});

// Synchronisation Sequelize avec la base de données
// `alter: true` adapte les tables au modèle sans perdre les données (utile en développement)
sequelize.sync().then(() => {
  console.log("Database synced");
});

// Démarrage du serveur sur le port 3000
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

// Routes de l'API : séparation claire des ressources
const employeeRoutes = require("./routes/employee.routes");

// Les routes montées ci-dessous correspondent aux contrôleurs associés
app.use("/employees", employeeRoutes);

// departments & responsibilities routes
const departmentRoutes = require("./routes/department.routes");
const responsibilityRoutes = require("./routes/responsibility.routes");

// Les endpoints pour /departments et /responsibilities
app.use("/departments", departmentRoutes);
app.use("/responsibilities", responsibilityRoutes);
