function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorButton = document.querySelector('.change-color');
const color = document.querySelector('.color');
changeColorButton.addEventListener('click', onChangeColorBtn);
const bodyEl = document.querySelector('body');

function onChangeColorBtn() {
  const hexColor = getRandomHexColor();
  color.textContent = hexColor;
  bodyEl.style.backgroundColor = hexColor;
}


