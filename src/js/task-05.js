const inputEl = document.getElementById('name-input');
const text = document.getElementById('name-output');
inputEl.addEventListener('input', onInputElementClick);

function onInputElementClick(event) {
    text.textContent = event.currentTarget.value;
    if (text.textContent === '') {
        text.textContent = 'Anonymous'
    }
}
