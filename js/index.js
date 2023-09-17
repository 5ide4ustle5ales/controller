const tableController = document.getElementById('table-controller');

const upButton = tableController.querySelector('.up');
const leftButton = tableController.querySelector('.left');
const rightButton = tableController.querySelector('.right');
const downButton = tableController.querySelector('.down');

upButton.addEventListener('click', moveTableUp);
leftButton.addEventListener('click', moveTableLeft);
rightButton.addEventListener('click', moveTableRight);
downButton.addEventListener('click', moveTableDown);

function moveTableUp() {
  // Move the table up by 7% of the screen height
  const screenHeight = window.innerHeight;
  const tableTop = tableController.offsetTop;
  tableController.style.top = tableTop - screenHeight * 0.07 + 'px';
}

function moveTableLeft() {
  // Move the table left by 7% of the screen width
  const screenWidth = window.innerWidth;
  const tableLeft = tableController.offsetLeft;
  tableController.style.left = tableLeft - screenWidth * 0.07 + 'px';
}

function moveTableRight() {
  // Move the table right by 7% of the screen width
  const screenWidth = window.innerWidth;
  const tableLeft = tableController.offsetLeft;
  tableController.style.left = tableLeft + screenWidth * 0.07 + 'px';
}

function moveTableDown() {
  // Move the table down by 7% of the screen height
  const screenHeight = window.innerHeight;
  const tableTop = tableController.offsetTop;
  tableController.style.top = tableTop + screenHeight * 0.07 + 'px';
}
