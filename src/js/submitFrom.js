import { formValidation } from "./eventListeners";

function submitAction() {
    const btn = document.getElementById("buy-btn");
    btn.addEventListener("click", () => {
        if (formValidation()) {
            alert("Order Submitted");
            document.getElementById("order-form").submit();
        }
    });
}

submitAction();