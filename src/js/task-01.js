
const arrCategoryy = document.querySelectorAll('.item');
console.log(`Number of categories: ${arrCategoryy.length}`);




const masuv = document.querySelectorAll('.item')


const message = masuv.forEach((element) => { 
 
    console.log('Ctegory:', element.children[0].textContent);
    console.log('Elements:',element.children[1].children.length);
})



