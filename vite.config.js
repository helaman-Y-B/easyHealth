import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    root: "src/",

    build: {
        outDir: "../dist/",
        rollupOptions: {
            input: {
                main: resolve(__dirname, "src/index.html"),
                cart: resolve(__dirname, "src/cart/cart.html"),
                orderCart: resolve(__dirname, "src/order-cart/buy-form.html"),
                fruitPage: resolve(__dirname, "src/fruit-page/fruit.html"),
                favorite: resolve(__dirname, "src/favorite-page/favorites.html"),
            },
        },
    },
});