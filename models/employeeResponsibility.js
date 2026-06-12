module.exports = (sequelize, DataTypes) => {
  const EmployeeResponsibility = sequelize.define(
    "EmployeeResponsibility",
    {},
    { timestamps: false },
  );

  EmployeeResponsibility.beforeCreate(async (record) => {
    const { Employee, Responsibility } = sequelize.models;

    const employee = await Employee.findByPk(record.EmployeeId);
    if (!employee) {
      throw new Error("Employee does not exist.");
    }

    const responsibility = await Responsibility.findByPk(
      record.ResponsibilityId,
    );
    if (!responsibility) {
      throw new Error("Responsibility does not exist.");
    }
  });

  return EmployeeResponsibility;
};
