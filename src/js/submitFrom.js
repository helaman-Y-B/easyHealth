import { formValidation } from "./eventListeners";
import { removeLocalStorage } from "./services"

function submitAction() {
    const btn = document.getElementById("buy-btn");
    btn.addEventListener("click", () => {
        if (formValidation()) {
            alert("Order Submitted");
            removeLocalStorage("cart");
            document.getElementById("order-form").submit();
        }
    });
}

submitAction();