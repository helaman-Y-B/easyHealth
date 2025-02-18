import { getlocalStorage } from "./services";
import { createFruitCart } from "./fruitBanner"

export async function showCart() {
    const cartInLocal = getlocalStorage("cart");
    let total = 0;

    for (let i = 0; i < cartInLocal.length; i++) {
        createFruitCart(cartInLocal[i]);
        const totalPrice = document.getElementById("total-price");

        if (totalPrice.innerText === "XXXX.XXXX") {
            total = cartInLocal[i].totalPrice;
        } else {
            total += parseFloat(cartInLocal[i].totalPrice);
        }

        totalPrice.innerText = `$${total.toFixed(2)}`;
    }
}

document.addEventListener('DOMContentLoaded', showCart);