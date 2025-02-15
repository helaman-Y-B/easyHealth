import { getData } from "./getData.js";

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

export async function changeQuantity(changeBy) {
  const quantity = document.getElementById('quantity');
  const price = document.getElementById('price');
  const totalPrice = document.getElementById('total-price');
  console.log(quantity.value + " This is the quantity");
  const urlParam = new URLSearchParams(window.location.search).get('fruit');
  const priceData = await getData("../json/fruitPrices.json");

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