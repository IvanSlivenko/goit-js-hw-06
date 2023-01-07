const currentInput = document.querySelector('#validation-input');
const normInputLength = currentInput.dataset.length;


currentInput.addEventListener('blur',inputBlur);

function inputBlur(e) {
    // console.log(normInputLength);
    // console.log(currentInput.value.length);
 
    if (e.currentTarget.value.length === Number(normInputLength)) {
        currentInput.classList.add('valid');
        currentInput.classList.remove('invalid');
        // console.log('ok');
        return
    }
    else if(e.currentTarget.value.length !== Number(normInputLength)) {
        currentInput.classList.remove('valid');
        currentInput.classList.add('invalid');
        
        // console.log('noy');
        return
    }
}