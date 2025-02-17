import { getlocalStorage } from "./services";
import { createFruitCart } from "./fruitBanner"

export async function showCart() {
    const cartInLocal = getlocalStorage("cart");

    for (let i = 0; i < cartInLocal.length; i++) {
        createFruitCart(cartInLocal[i]);
        const totalPrice = document.getElementById("total-price");

        if (totalPrice.innerText === "XXXX.XXXX") {
            totalPrice.innerText = cartInLocal[i].totalPrice.toFixed(2);
        } else {
            totalPrice.innerText = `$${parseFloat(totalPrice.innerText) + parseFloat(cartInLocal[i].totalPrice.toFixed(2))}`;
        }
    }
}

document.addEventListener('DOMContentLoaded', showCart);