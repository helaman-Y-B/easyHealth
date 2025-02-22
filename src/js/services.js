import { getData } from "./getData.js";

export function stringifyObject(obj) {
    return JSON.stringify(obj);
}

export function setlocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function getlocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

export function removeLocalStorage(key) {
    localStorage.removeItem(key);
}

export function clearLocalStorage() {
    localStorage.clear();
}

export async function addFruitToCart(urlParam) {
    const priceData = await getData("../json/fruitPrices.json");
    let cart = getlocalStorage("cart") || [];
    if (!Array.isArray(cart)) {
        cart = [];
    }
    const quantity = document.getElementById("quantity").value;
    const totalPrice = priceData.find(fruit => fruit.name === urlParam)?.price * parseFloat(quantity).toFixed(2);
    const fruitName = urlParam;
    cart.push({ fruit: fruitName, quantity, totalPrice });
    setlocalStorage("cart", cart);
    alert(`Successfully added ${quantity} ${fruitName} to your cart!`);
}

export async function addFruitToWish(fruitName) {
    
    if (getlocalStorage("wish") === null) {
        const wishList = []
        setlocalStorage("wishList", wishList)
    } else {
        const wishList = getlocalStorage("wishList");
        wishList.push({ fruit: fruitName });
        setlocalStorage("wishList", wishList);
    }
}

