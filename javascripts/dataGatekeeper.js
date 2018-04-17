const loadDepartments = require('./departments');
const loadItems = require('./items');
const printDepartmentDom = require('./departmentDom');
const data = require('./data');

const whenDepartmentsLoad = function () {
  const departmentsData = JSON.parse(this.responseText).departments;
  data.setDepartments(departmentsData);
  printDepartmentDom(departmentsData);
};

const whenItemsLoad = function () {
  const itemsData = JSON.parse(this.responseText).items;
  data.setItems(itemsData);
};

const badDepartments = function () {
  console.error('shit broke');
};

const initializer = () => {
  loadDepartments(whenDepartmentsLoad, badDepartments);
  loadItems(whenItemsLoad, badDepartments);
};

module.exports = {
  initializer,
};
