import { getlocalStorage, setlocalStorage } from "./services";
import { createFruitCart } from "./fruitBanner"

export async function showCart() {
    const cartInLocal = getlocalStorage("cart");
    let total = 0;
    const totalPrice = document.getElementById("total-price");

    for (let i = 0; i < cartInLocal.length; i++) {
        createFruitCart(cartInLocal[i]);

        if (totalPrice.innerText === "XXXX.XXXX") {
            total = cartInLocal[i].totalPrice;
        } else {
            total += parseFloat(cartInLocal[i].totalPrice);
        }

        totalPrice.innerText = `$${total.toFixed(2)}`;
    }
}

document.addEventListener("DOMContentLoaded", showCart);
const buyBtn = document.getElementById("buy-button");
    buyBtn.addEventListener("click", 
        setlocalStorage("total-price", totalPrice.innerText),
        window.location.search = "order-cart/buy-form.html"
    )