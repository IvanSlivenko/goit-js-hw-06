const currentInput = document.querySelector('#font-size-control');

const currentText = document.querySelector('#text');

currentInput.addEventListener('input',changeFontsize)
function changeFontsize() {
    currentText.style.fontSize = currentInput.value + 'px';
    

}

