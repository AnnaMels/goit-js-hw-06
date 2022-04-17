const inputEl = document.getElementById('font-size-control');
const text = document.getElementById('text');
inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    text.style.fontSize = `${event.currentTarget.value}px`;
}