import { menuArray } from './data.js';

const containerParent = document.querySelector('.big-container');



let orderContainer = ''; // to hold the order container
let totalPrice = 0; // to hold the total price of the order
let totalPriceValue = null;
let orderItemsContainer = null;

function addToTotal(price) {
    totalPrice += Number(price);
    if (totalPriceValue) totalPriceValue.textContent = `$${totalPrice.toFixed(2)}`;
}





function render() {
    containerParent.innerHTML = '';
    const menuBtn = document.createElement('h1');
    menuBtn.classList.add('menu');
    menuBtn.textContent = 'Menu';
    containerParent.appendChild(menuBtn);
    // listening to the click event on the menu button
    menuBtn.addEventListener('click', () => {
        // removing the menu button
        containerParent.removeChild(menuBtn);
        // rendering the menu items
        renderMenuItems();
    });

}

function renderMenuItems() {
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
        const plusContainer = document.createElement('div');
        plusContainer.classList.add('category-plus-container');

        const plusBtn = document.createElement('button');
        plusBtn.classList.add('category-plus');
        plusBtn.textContent = '+';

        // put button inside its container
        plusContainer.appendChild(plusBtn);
        // adding an event listener to the plus button
        plusBtn.addEventListener('click', () => {
            //creating the order container
            // let create our order container once
            if (!orderContainer) {
                orderContainer = document.createElement('div');
                orderContainer.classList.add('order-container');
                // appending the order container to the body
                document.body.appendChild(orderContainer);
                // creating the order title
                const orderTitle = document.createElement('h2');
                orderTitle.classList.add('order-title');
                orderTitle.textContent = 'Your Order';
                orderContainer.appendChild(orderTitle);

                // creating a container for my line
                orderItemsContainer = document.createElement('div');
                orderItemsContainer.classList.add('order-items-container');
                orderContainer.appendChild(orderItemsContainer);

                // now let get a line to separate the items from the total price
                const separator = document.createElement('hr');
                separator.classList.add('order-separator');
                orderContainer.appendChild(separator);

                // creating the total price container
                const totalPriceContainer = document.createElement('div');
                totalPriceContainer.classList.add('total-price-container');
                orderContainer.appendChild(totalPriceContainer);

                // creating the total price text
                const totalPriceText = document.createElement('span');
                totalPriceText.classList.add('total-price-text');
                totalPriceText.textContent = 'Total Price: ';
                totalPriceContainer.appendChild(totalPriceText);

                // creating the total price value
                totalPriceValue = document.createElement('span');
                totalPriceValue.classList.add('total-price-value');
                totalPriceValue.textContent = '$0.00';
                totalPriceContainer.appendChild(totalPriceValue);

                // let create a button to complete our order
                // first create a div for it
                const completeOrderContainer = document.createElement('div');
                completeOrderContainer.classList.add('complete-order-container');
                orderContainer.appendChild(completeOrderContainer);

                // now create the button and append it to the container
                const completeOrderBtn = document.createElement('button');
                completeOrderBtn.classList.add('complete-order-btn');
                completeOrderBtn.textContent = 'Complete Order';
                completeOrderContainer.appendChild(completeOrderBtn);

                // now let listen to clicks on the complete order btn
                completeOrderBtn.addEventListener('click', () => {
                    // the complete btn is going to bring a modal for a user to enter their card details
                    setTimeout(() => {
                        const modalContainer = document.createElement('div')
                        modalContainer.classList.add('modalContainer')
                        modalContainer.innerHTML = `
                         <div class='modalContent'>
                             <h1>Enter Card Details</h1>
                             <button class='close-modal-btn'>X</button>
                             <form class='card-form'>
                                    <input type='text' placeholder='Enter your name' required>
                                    <input type='text' placeholder='Enter your card number' required>
                                    <input type='text' placeholder='Enter CVV' required>
                                    <button class='pay-btn' type = 'submit'>Pay</button>
                            </form>
                                
                         </div>`
                        document.body.append(modalContainer);

                        const closeModalBtn = document.querySelector('.close-modal-btn'); // to close the modal 
                        const payBtn = document.querySelector('.pay-btn'); // to pay for the order  

                        // let first handle our close modal button
                        closeModalBtn.addEventListener('click', () => {
                           if(modalContainer) {
                               modalContainer.remove();
                           }
                        });
                    },
                        500)
                });

            }

            // selecting the line
            orderItemsContainer = orderContainer.querySelector('.order-items-container');
            // creating the individual order container
            const orderItem = document.createElement('div');
            orderItem.classList.add('order-item');
            orderItemsContainer.appendChild(orderItem);

            // creating the order item elements
            const orderItemText = document.createElement('h2');
            orderItemText.classList.add('order-item-text');
            orderItemText.textContent = item.name;
            orderItem.appendChild(orderItemText);


            // creating the remove button
            const removeBtn = document.createElement('button');
            removeBtn.classList.add('remove-btn');
            removeBtn.textContent = 'Remove';
            orderItem.appendChild(removeBtn);

            // adding event listener to our remove btn
            removeBtn.addEventListener('click', () => {
                orderItem.remove();
                totalPrice -= Number(item.price);
                totalPriceValue.textContent = `$${totalPrice.toFixed(2)}`;
            })

            // creating the order item price
            // let put the price inside a div to be safe
            const orderItemPriceContainer = document.createElement('div');
            orderItemPriceContainer.classList.add('order-item-price-container');
            orderItem.appendChild(orderItemPriceContainer);


            const orderItemPrice = document.createElement('span');
            orderItemPrice.classList.add('order-item-price');
            orderItemPrice.textContent = `$${item.price}`;
            orderItemPriceContainer.appendChild(orderItemPrice);



            addToTotal(item.price); // updating the total price




        });


        itemContainer.appendChild(plusContainer);


        containerParent.appendChild(itemContainer);

    })

}
// rendering the menu btn and content
render();
