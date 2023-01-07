const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listImage = document.querySelector('.gallery');

listImage.style.display = 'flex';
listImage.style.flexDirection = 'column';
listImage.style.listStyle= "none";

const masivImages = images.map((elem) =>
  `<li>
      <img 
        src=${elem.url} 
        alt=${elem.alt}
        width="300"
        height="auto"
        display="block">      
    </img>
  </li>`
).join('')
listImage.insertAdjacentHTML('beforeend',masivImages)
// const masuvTranzyt = [];

// const masuvImg = images.map((elem) => {
//   const itemImg = document.createElement('img');

//   itemImg.src = elem.url;
//   itemImg.alt = elem.alt;
//   itemImg.style.margin = '5px';
//   itemImg.style.height = 'auto';
//   itemImg.style.width = '300px';
//   itemImg.style.display = 'block';

//   masuvTranzyt.push(itemImg);
 
//   console.log(masuvTranzyt);

// }
// )
// listImage.append(...masuvTranzyt);


