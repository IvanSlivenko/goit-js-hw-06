
const refs = {
    btnDown: document.querySelector(`[data-action="decrement"]`),
    btnUp: document.querySelector(`[data-action="increment"]`),
    spanCounter:document.querySelector('#value'),
}

refs.btnDown.addEventListener('click', decrementic);
refs.btnUp.addEventListener('click', incrementic);




function incrementic() {
    const counterValue = refs.spanCounter.textContent;
    // console.log('counterValue',counterValue);
    // console.log("Будемо збільшувати значення спану");
    refs.spanCounter.textContent =Number(counterValue) + 1;
}


function decrementic() {
    const counterValue = refs.spanCounter.textContent;
    // console.log('counterValue',counterValue);
    // console.log("Будемо зменшувати значення спану");
    refs.spanCounter.textContent = Number(counterValue)-1;
}

