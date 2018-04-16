let departments = [];
let items = [];

const getItems = () => {
  return items;
};

const setItems = (itemsArray) => {
  items = itemsArray;
};

const getDepartments = () => {
  return departments;
};

const setDepartments = (departmentsArray) => {
  departments = departmentsArray;
};

module.exports = {
  getDepartments,
  setDepartments,
  getItems,
  setItems,
};
