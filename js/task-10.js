
const inputNumber = document.querySelector('#controls>input')
const inputBox = document.querySelector('#boxes');
const btnCreate = document.querySelector(`[data-create]`)
const btnDestroy = document.querySelector(`[data-destroy]`)

btnDestroy.addEventListener('click',clickbtnDestroy)

function clickbtnDestroy(event) {
  inputBox.innerHTML = '';
}


btnCreate.addEventListener('click', cliclbtnCreate);

function cliclbtnCreate() {

  const curretNumbers =inputNumber.value;
  const container = [];

  for (let i = 0; i < curretNumbers; i+=1) {
    const newDiv = document.createElement('div');
    newDiv.style.height = `${30+10*i}px`;
    newDiv.style.width = `${30+10*i}px`;
    newDiv.style.background = getRandomHexColor();
    container.push(newDiv);
    
  }
  inputBox.append(...container);
}

function CreateOunDiv() {

 
  const newDiv = document.createElement('div');
  newDiv.style.height = `30px`;
  newDiv.style.width = `30px`;
  newDiv.style.background = getRandomHexColor();
  inputBox.append(newDiv);
  // console.log(inputBox);

}
  




function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
