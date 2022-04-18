function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const boxesContainerEl = document.getElementById('boxes');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const inputEl = document.getElementById('controls').firstElementChild;

function createBoxes(amount) {
  const firstItem = document.createElement('div');
    firstItem.style.width = '20px';
    firstItem.style.height = '20px';
  
  let width = 20;
  let height = 20;
  
  for (let i = 1; i <= amount; i += 1) {
    width += 10;
    height += 10;
    const item = document.createElement('div');
    item.style.width = `${width}px`;
    item.style.height = `${height}px`;
    item.style.backgroundColor = getRandomHexColor();
    item.style.marginTop = '10px';
    boxesContainerEl.append(item);
  }
};

function destroyBoxes() {
  boxesContainerEl.innerHTML = '';
};


destroyBtn.addEventListener('click', () => {
  inputEl.value = '';
  destroyBoxes();
});

createBtn.addEventListener('click', () => {
  createBoxes(inputEl.value);
});


