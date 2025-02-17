import { stringifyObject } from "./services.js";
import { sendToFruitPage } from "./eventListeners.js";
import { getData } from "./getData.js";
import { fruitBuyEvents } from "./eventListeners.js";

export function createBlock(fruit) {
    const divFruit = document.getElementById("catalog");

    // Create a div element and add the class fruit-banner to it
    const fruitBanner = document.createElement("div");
    fruitBanner.classList.add("fruit-banner");
    fruitBanner.id = fruit.name;

    // Create an image element and set the source to a placeholder image
    const img = document.createElement("img");
    //getImgUrl(fruit);
    img.src = "/img/fruits-img/" + fruit.name + ".jpeg";
    img.alt = fruit.name;
    img.classList.add("center-image");

    // Create a header element and add the class fruit-header to it
    const header = document.createElement("h3");
    header.classList.add("fruit-header");
    header.innerHTML = fruit.name;

    // Create a paragraph element and add the class fruit-facts to it
    const paragraph = document.createElement("p");
    paragraph.classList.add("fruit-facts");
    paragraph.innerHTML = `Nutritions:<br>Carbohydrates: ${stringifyObject(fruit.nutritions.carbohydrates)}<br>Fat: ${stringifyObject(fruit.nutritions.fat)}<br>Protein: ${stringifyObject(fruit.nutritions.protein)}<br>Calories: ${stringifyObject(fruit.nutritions.calories)}<br>Sugar: ${stringifyObject(fruit.nutritions.sugar)}`;

    // Append the image, header, and paragraph to the fruitBanner div
    fruitBanner.appendChild(img);
    fruitBanner.appendChild(header);
    fruitBanner.appendChild(paragraph);

    // Append the fruitBanner div to the divFruit div
    divFruit.appendChild(fruitBanner);

    sendToFruitPage(fruit);
}

// Function to create the fruit banner in the fruit.html page
export async function createFruitPage() {
    const priceData = await getData("../json/fruitPrices.json");
    console.log(priceData);
    // Get the fruit div element
    const divFruit = document.getElementById("fruit");
    // Get the fruit name from the URL
    const urlParam = new URLSearchParams(window.location.search).get('fruit');
    // Store the API URL into a variable
    const fruitApi = `https://api.allorigins.win/raw?url=https://www.fruityvice.com/api/fruit/${urlParam}`;
    // Get the fruit data
    const fruitData = await getData(fruitApi);

    // Set the innerHTML of the divFruit element to show the selected fruit from index.html
    divFruit.innerHTML = `
    <h2 class="fruit-header">${urlParam}</h2>
        <img src="/img/fruits-img/${urlParam}.jpeg" alt="Fruit image" id="fruit-image" class="center-image">
        <div id="fruit-facts">
            <h3>FACS</h3>
            <p>Calories: ${fruitData.nutritions.calories}</p>
            <p>Carbohydrates: ${fruitData.nutritions.carbohydrates}</p>
            <p>Fat: ${fruitData.nutritions.fat}</p>
            <p>Protein: ${fruitData.nutritions.protein}</p>
            <p>Sugar: ${fruitData.nutritions.sugar}</p>
            <p id="price">Price: $${priceData.find(fruit => fruit.name === urlParam)?.price || 'N/A'} per pound</p>
        </div>

        <div class="quantity-box">
            <input type="number" id="quantity" value="1" min="1">
            <button class="decrease">-</button>
            <button class="increase">+</button>
        </div>
        <p id="total-price">Total price: $${(priceData.find(fruit => fruit.name === urlParam)?.price * 1).toFixed(2) || 'N/A'}</p>
        <button id="place-order">Add to cart</button>
    `;
    fruitBuyEvents();
}

export async function createFruitCart(fruitData) {
    const cart = document.getElementById("cart-list");

    const fruitDiv = document.createElement("div")
    fruitDiv.classList.add("products");

    fruitDiv.innerHTML = `
        <img class="fruit-img" src="https://placehold.co/100x100" alt="Fruit image">
        <h3 class="fruit-name">${fruitData.fruit}</h3>
        <p class="fruit-quantity">QTY: ${fruitData.quantity}</p>
        <p class="fruit-price">Price: $${fruitData.totalPrice.toFixed(2)}</p>`

    cart.appendChild(fruitDiv);
}