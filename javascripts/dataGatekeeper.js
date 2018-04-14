const loadDepartments = require('./departments');
const printDepartmentDom = require('./departmentDom');
const data = require('./data');

const whenDepartmentsLoad = function () {
  const departmentsData = JSON.parse(this.responseText).departments;
  data.setDepartments(departmentsData);
  printDepartmentDom(departmentsData);
};

const badDepartments = function () {
  console.error('shit broke');
};

const initializer = () => {
  loadDepartments(whenDepartmentsLoad, badDepartments);
};

module.exports = {
  initializer,
};
