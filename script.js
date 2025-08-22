import { menuArray } from './data.js';

const containerParent = document.querySelector('.big-container');



function render(){
    containerParent.innerHTML = '';
    const menuBtn = document.createElement('h1');
    menuBtn.classList.add('menu');
    menuBtn.textContent = 'Menu';
    containerParent.appendChild(menuBtn);

// rendering the menu items
menuArray.map((item) => {
    // creating the item container
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('category-container');

    // creating the item elements
    // handling the image
    const itemImage = document.createElement('p');
    itemImage.classList.add('category-img');
    itemImage.textContent = item.emoji;
    itemContainer.appendChild(itemImage);

    // let create a div for the text content
    // handling the title and description


    const textContainer = document.createElement('div');
    textContainer.classList.add('category-desc');
    itemContainer.appendChild(textContainer);
    // handling the title
    const itemTitle = document.createElement('h2');
    itemTitle.classList.add('category-title');
    itemTitle.textContent = item.name;
    textContainer.appendChild(itemTitle);

    // handling the description
    const itemDescription = document.createElement('p');
    itemDescription.classList.add('category-description');
    itemDescription.textContent = item.ingredients;
    textContainer.appendChild(itemDescription);

    // handling the price
    const itemPrice = document.createElement('span');
    itemPrice.classList.add('menu-price');
    itemPrice.textContent = `$${item.price}`;
    textContainer.appendChild(itemPrice);

    // handling the plus btn
    // handling the plus btn
const plusContainer = document.createElement('div');
plusContainer.classList.add('category-plus-container');

const plusBtn = document.createElement('button');
plusBtn.classList.add('category-plus');
plusBtn.textContent = '+';

// put button inside its container
plusContainer.appendChild(plusBtn);


itemContainer.appendChild(plusContainer);

    
    containerParent.appendChild(itemContainer);
    
})

}
// rendering the menu btn and content
render();
