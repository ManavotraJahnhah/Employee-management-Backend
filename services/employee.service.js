const { Employee, Department, Responsibility } = require("../models");

// Service Employee : contient la logique métier liée aux employés
// Il sépare la logique applicative (calculs, associations) des contrôleurs HTTP

// Récupère tous les employés avec leur département et responsabilités
exports.getAllEmployees = async () => {
  return await Employee.findAll({
    include: [Department, Responsibility],
  });
};

// Récupère un employé par PK en incluant les relations
exports.getEmployeeById = async (id) => {
  return await Employee.findByPk(id, {
    include: [Department, Responsibility],
  });
};

// Crée un employé et gère l'association avec le département et les responsabilités
// - `data` peut contenir `departmentId` et `responsibilities` (tableau d'ids)
exports.createEmployee = async (data) => {
  const { responsibilities, departmentId, ...employeeData } = data;

  // Création de l'employé (la clé DepartmentId est injectée pour l'association)
  const employee = await Employee.create({
    ...employeeData,
    DepartmentId: departmentId,
  });

  // Si des responsabilités sont fournies, on associe les enregistrements correspondants
  if (responsibilities?.length) {
    const reps = await Responsibility.findAll({
      where: {
        id: responsibilities,
      },
    });

    // Méthode fournie par Sequelize pour mettre à jour la relation N:M
    await employee.setResponsibilities(reps);
  }

  // Retourner l'employé fraîchement créé avec ses relations
  return await Employee.findByPk(employee.id, {
    include: [Department, Responsibility],
  });
};

// Met à jour un employé existant
exports.updateEmployee = async (id, data) => {
  const employee = await Employee.findByPk(id);

  if (!employee) {
    return null; // signaler au contrôleur que l'entité n'existe pas
  }

  await employee.update(data);

  return employee;
};

// Supprime un employé par id
exports.deleteEmployee = async (id) => {
  return await Employee.destroy({
    where: {
      id,
    },
  });
};

exports.checkEmployeeCode = async (employeeCode) => {
  const employee = await Employee.findOne({
    where: { employeeCode },
  });

  return !employee;
};
