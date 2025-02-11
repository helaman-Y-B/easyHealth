import { createBlock } from './fruitBanner.js';

export function putFruitData(fruitData, fruitImage) {

    // The function putFruitData() is used to display the fruit data on the main page.
    // The function takes the fruitData as an argument and then creates a block for each fruit.
    fruitData.then(data => {
        let count = 0;
        // The forEach() method is used to iterate over the fruit data and create a block for each fruit.
        data.forEach(fruit => {
            if (count < 10) {
                createBlock(fruit, fruitImage);
                count++;
            }
        });
    })
        .catch(error => {
            console.log(error);
        });
}
