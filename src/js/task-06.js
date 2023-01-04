const currentInput = document.querySelector('#validation-input');
const normInputLength = currentInput.dataset.length;

currentInput.addEventListener('blur',inputBlur);

function inputBlur() {
  
 
if (currentInput.value.length == normInputLength) {
    currentInput.classList.add('valid');
    return console.log('ok');
    }
    
    currentInput.classList.add('invalid');
    return console.log('noy');
}