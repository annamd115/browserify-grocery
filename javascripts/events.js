const departmentCard = document.getElementsByClassName('department');

const showDepartmentName = (e) => {
  const departmentImg = e.target.children[1];
  const departmentName = e.target.children[0];

  departmentImg.classList.add('grey-out');
  departmentName.classList.remove('hide');
};

const hideDepartmentName = (e) => {
  const departmentImg = e.target.children[1];
  const departmentName = e.target.children[0];

  departmentImg.classList.remove('grey-out');
  departmentName.classList.add('hide');
};

const showItems = (e) => {
  const departmentId = e.target.parentNode.children[0].dataset.departmentId;
  console.log(departmentId);
};

const addDepartmentEvents = () => {
  for (let i = 0; i < departmentCard.length; i++) {
    departmentCard[i].addEventListener('mouseenter', showDepartmentName);
    departmentCard[i].addEventListener('mouseleave', hideDepartmentName);
    departmentCard[i].addEventListener('click', showItems);
  }
};

module.exports = {
  addDepartmentEvents,
};
