
const refs = {
    btnDown: document.querySelector(`[data-action="decrement"]`),
    btnUp: document.querySelector(`[data-action="increment"]`),
    spanCounter:document.querySelector('#value'),
}

refs.btnDown.addEventListener('click', decrementic);
refs.btnUp.addEventListener('click', incrementic);




function incrementic() {
    const currentCounter = refs.spanCounter.textContent;
    console.log('currentCounter',currentCounter);
    // console.log("Будемо збільшувати значення спану");
    refs.spanCounter.textContent =Number(currentCounter) + 1;
}


function decrementic() {
    const currentCounter = refs.spanCounter.textContent;
    console.log('currentCounter',currentCounter);
    // console.log("Будемо зменшувати значення спану");
    refs.spanCounter.textContent = Number(currentCounter)-1;
}

