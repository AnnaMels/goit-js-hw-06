// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// };

// const boxesContainerEl = document.getElementById('boxes');
// const createBtn = document.querySelector('button[data-create]');
// const destroyBtn = document.querySelector('button[data-destroy]');
// const inputEl = document.getElementById('controls').firstElementChild;

// function createBoxes(amount) {
//   const firstItem = document.createElement('div');
//     firstItem.style.width = '20px';
//     firstItem.style.height = '20px';
//     firstItem.style.backgroundColor = 'pink';
//     firstItem.style.marginBottom = '10px';
  
//   let width = parseInt(firstItem.style.width);
//   let height = parseInt(firstItem.style.height);
  
//   for (let i = 1; i <= amount; i += 1) {
//     width += 10;
//     height += 10;
//     const item = document.createElement('div');
//     item.style.width = `${width}px`;
//     item.style.height = `${height}px`;
//     item.style.backgroundColor = 'pink';
//     item.style.marginBottom = '10px';
//     boxesContainerEl.append(item);
//   }
// };

// createBoxes(5);

