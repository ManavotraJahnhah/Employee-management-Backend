const {
  Employee,
  Department,
  Responsibility
} = require('../models');

exports.getAllEmployees = async () => {
  return await Employee.findAll({
    include: [Department, Responsibility]
  });
};

exports.getEmployeeById = async (id) => {
  return await Employee.findByPk(id, {
    include: [Department, Responsibility]
  });
};

exports.createEmployee = async (data) => {
  const {
    responsibilities,
    departmentId,
    ...employeeData
  } = data;

  const employee = await Employee.create({
    ...employeeData,
    DepartmentId: departmentId
  });

  if (responsibilities?.length) {
    const reps = await Responsibility.findAll({
      where: {
        id: responsibilities
      }
    });

    await employee.setResponsibilities(reps);
  }

  return await Employee.findByPk(employee.id, {
    include: [Department, Responsibility]
  });
};

exports.updateEmployee = async (id, data) => {
  const employee = await Employee.findByPk(id);

  if (!employee) {
    return null;
  }

  await employee.update(data);

  return employee;
};

exports.deleteEmployee = async (id) => {
  return await Employee.destroy({
    where: {
      id
    }
  });
};