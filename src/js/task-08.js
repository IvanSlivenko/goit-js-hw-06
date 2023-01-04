

const forms = document.querySelector('.login-form');


const inputEmail = forms.children[0].children[0];
const inputPassword = forms.children[1].children[0];
const btn = forms.children[2];

forms.addEventListener('submit', submitForms);

function submitForms(event) {
    event.preventDefault();
console.log(event);
    
    
}

//Модуль 7. Занятие 14. События (17.09)
//27.07

