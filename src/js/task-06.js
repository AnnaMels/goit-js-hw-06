const inputEl = document.getElementById('validation-input');
const validLength = inputEl.dataset.length;

inputEl.addEventListener('blur', onInputChange);

function onInputChange(event) {
    if (event.currentTarget.value.length === Number(validLength)) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    }

    if (event.currentTarget.value.length < Number(validLength) || event.currentTarget.value.length > Number(validLength)) {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
}