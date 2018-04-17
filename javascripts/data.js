let departments = [];
let items = [];
const cart = [];

const getDepartments = () => {
  return departments;
};

const setDepartments = (departmentsArray) => {
  departments = departmentsArray;
};

const setItems = (itemsArray) => {
  items = itemsArray;
};

const getItems = () => {
  return items;
};

const getitemsByDepartment = (departmentId) => {
  const selectedItems = [];
  items.forEach((item) => {
    if (item.departmentId === departmentId) {
      selectedItems.push(item);
    }
  });
  return selectedItems;
};

const setCart = (itemId, numberToAdd) => {
  // This finds the index of the object in the array that has that id
  const itemPosition = items.map(function (item) {
    return item.id;
  }).indexOf(itemId);
  // Then returns the entire object, which we save in a variable
  const newItem = items[itemPosition];
  // Adding a new key value pair to that object
  newItem.purchaseNum = numberToAdd;
  cart.push(newItem);
  console.log('cart', cart);
};

module.exports = {
  getDepartments,
  setDepartments,
  setItems,
  getItems,
  getitemsByDepartment,
  setCart,
};
