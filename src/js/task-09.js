const refs = {
  bntChangeColor: document.querySelector('.change-color'),
  SpanColor: document.querySelector('.color'),
    
}

refs.bntChangeColor.addEventListener('click',ChangeColorBody)

function ChangeColorBody() {
  // console.log(document.body);
  // console.dir(document.body);
  document.body.style.background = getRandomHexColor();
  // console.log(document.body.style.background);
  refs.SpanColor.textContent = document.body.style.background
  refs.SpanColor.style.color = getRandomHexColor();
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
