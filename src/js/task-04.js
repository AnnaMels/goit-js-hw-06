let counterValue = 0;
const value = document.getElementById('value');
const counterEl = document.getElementById("counter");
counterEl.firstElementChild.addEventListener('click', (e) => {
    value.textContent = counterValue -= 1;
});

counterEl.lastElementChild.addEventListener('click', (e) => {
    value.textContent = counterValue += 1;
});

