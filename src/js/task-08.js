

const forms = document.querySelector('.login-form');

forms.addEventListener('submit', submitForms);

function submitForms(event) {
    event.preventDefault();
    const transytMasyv = {
        email: '',
        password:'',
    }
    // console.log(event.currentTarget);

    if (event.currentTarget.elements.email.value === '' || event.currentTarget.elements.password.value === '') {
        
        window.alert('Не всі поля форми  містять данні (перевірте email та password)');
    } else { 
    // console.dir(event.currentTarget.elements.email.value);
    //     console.dir(event.currentTarget.elements.password.value); 
        
        transytMasyv.email = event.currentTarget.elements.email.value;
        transytMasyv.password = event.currentTarget.elements.password.value;

        console.log(transytMasyv);
    }



}

//Модуль 7. Занятие 14. События (17.09)
//27.07

