import { getData } from "./getData.js";
import { addFruitToCart } from "./services.js";

// An event listener that sends the user to the fruit page when a fruit is clicked
// The function takes the fruit as an argument
export function sendToFruitPage(fruit) {
  // Get the element div with the fruit name as the id
  const fruitEvent = document.getElementById(`${fruit.name}`);
  // Add an event listener to the element
  if (fruitEvent) {
    // When the element is clicked, the user is sent to the fruit page with the fruit name as a query parameter
    fruitEvent.addEventListener('click', () => {
      const urlParam = new URLSearchParams({ fruit: fruit.name }).toString();
      window.location.href = `fruit-page/fruit.html?${urlParam}`;
    });
  } else {
    console.error(`Element with id ${fruit.name} not found.`);
  }
}

// An event listener that changes the quantity of the fruit the user wants to buy
export async function changeQuantity(changeBy) {
  const quantity = document.getElementById('quantity');
  const totalPrice = document.getElementById('total-price');
  const urlParam = new URLSearchParams(window.location.search).get('fruit');
  const priceData = await getData("../json/fruitPrices.json");

  // If the changeBy argument is 1, the quantity is increased by 1
  // If the changeBy argument is -1, the quantity is decreased by 1
  if (changeBy === 1) {
    quantity.value++;
    totalPrice.innerHTML = `Total price: $${(quantity.value * priceData.find(fruit => fruit.name === urlParam)?.price).toFixed(2)}`;
  } else if (changeBy === -1 && quantity.value > 1) {
    quantity.value--;
    totalPrice.innerHTML = `Total price: $${(quantity.value * priceData.find(fruit => fruit.name === urlParam)?.price).toFixed(2)}`;
  } else {
    console.error('Quantity cannot be less than 1');
  }
}

export function fruitBuyEvents() {
  // Get the decrease and increase buttons from the fruit page
  const decreaseButton = document.querySelector('.decrease');
  const increaseButton = document.querySelector('.increase');

  // Get the fruit name from the URL
  const urlParam = new URLSearchParams(window.location.search).get('fruit');

  // Add event listeners to the buttons
  decreaseButton.addEventListener('click', () => changeQuantity(-1));
  increaseButton.addEventListener('click', () => changeQuantity(1));

  // Get the place order button from the fruit page
  const placeOrderBtn = document.getElementById('place-order');

  // Add event listener to the button
  placeOrderBtn.addEventListener('click', () => {
    addFruitToCart(urlParam);
  });
}