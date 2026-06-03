const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');

const app = express();

app.use(cors());
app.use(express.json());

// test route
app.get('/', (req, res) => {
  res.send('API running');
});

// sync DB
sequelize.sync({ alter: true }).then(() => {
  console.log('Database synced');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

const employeeRoutes = require('./routes/employee.routes');

app.use('/employees', employeeRoutes);