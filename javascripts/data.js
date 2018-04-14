const loadDepartments = require('./departments');

let departmentsArray = [];

const whenDepartmentsLoad = function () {
  departmentsArray = JSON.parse(this.responseText).departments;
  console.log(departmentsArray);
};

const badDepartments = function () {
  console.error('shit broke');
};

const initializer = () => {
  loadDepartments(whenDepartmentsLoad, badDepartments);
};

const getDepartments = () => {
  return departmentsArray;
};

module.exports = {
  initializer,
  getDepartments,
};
