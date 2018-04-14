// the place where we hold the arrays
let departments = [];

const getDepartments = () => {
  return departments;
};

const setDepartments = (departmentsArray) => {
  departments = departmentsArray;
};

module.exports = {
  getDepartments,
  setDepartments,
};
