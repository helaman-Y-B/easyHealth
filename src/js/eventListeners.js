import { getData } from "./getData.js";
import { addFruitToCart, setlocalStorage, addFruitToWish, getlocalStorage, removeLocalStorage } from "./services.js";

export function cartIconEvent() {
  const cartBtn = document.getElementById("cart-icon");
  cartBtn.addEventListener("click", window.location.pathname = "/cart/cart.html");
}

// An event listener that sends the user to the fruit page when a fruit is clicked
// The function takes the fruit as an argument
export function sendToFruitPage(fruit) {
  // Get the element div with the fruit name as the id
  const fruitEvent = document.getElementById(`${fruit.name}`);
  // Add an event listener to the element
  if (fruitEvent) {
    // When the element is clicked, the user is sent to the fruit page with the fruit name as a query parameter
    fruitEvent.addEventListener("click", () => {
      const urlParam = new URLSearchParams({ fruit: fruit.name }).toString();
      window.location.href = `fruit-page/fruit.html?${urlParam}`;
    });
  } else {
    console.error(`Element with id ${fruit.name} not found.`);
  }
}

// An event listener that changes the quantity of the fruit the user wants to buy
export async function changeQuantity(changeBy) {
  const quantity = document.getElementById("quantity");
  const totalPrice = document.getElementById("total-price");
  const urlParam = new URLSearchParams(window.location.search).get("fruit");
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
    console.error("Quantity cannot be less than 1");
  }
}

export function fruitBuyEvents() {
  // Get the decrease and increase buttons from the fruit page
  const decreaseButton = document.querySelector(".decrease");
  const increaseButton = document.querySelector(".increase");

  // Get the fruit name from the URL
  const urlParam = new URLSearchParams(window.location.search).get("fruit");

  // Add event listeners to the buttons
  decreaseButton.addEventListener("click", () => changeQuantity(-1));
  increaseButton.addEventListener("click", () => changeQuantity(1));

  // Get the place order button from the fruit page
  const placeOrderBtn = document.getElementById("place-order");

  // Add event listener to the button
  placeOrderBtn.addEventListener("click", () => {
    addFruitToCart(urlParam);
  });
}

export async function wishListEvent() {
  const urlParam = new URLSearchParams(window.location.search).get("fruit");
  const wishBtn = document.getElementById("wish");
  if (wishBtn !== null) {
    wishBtn.addEventListener("click", () => {
  
      if (getlocalStorage("wishList") === null) {
        const wishArray = []
        setlocalStorage("wishList", wishArray)
        addFruitToWish(urlParam);
      } else {
        addFruitToWish(urlParam);
      }
  
      wishBtn.src = "/img/star.png";
      wishBtn.id = "wished";
    });
  } else {
    //This event is to unwish a fruit.
    const wishedBtn = document.getElementById("wished");
    wishedBtn.addEventListener("click", () => {
      if (wishedBtn.id === "wished"){
        const wishList = getlocalStorage("wishList");

        for (let i = 0; i < wishList.length; i++) {
          if (wishList[i] === null) {
            console.error("Fruit Item doesn't exist");
          } else if (wishList[i].fruit === urlParam){
            delete wishList[i];
          };
        };
      setlocalStorage("wishList", wishList);
      wishedBtn.src = "/img/empty-star.png";
      wishedBtn.id = "wish";
      wishListEvent();
      };
    });
  }
}