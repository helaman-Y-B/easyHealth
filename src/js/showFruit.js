import { createBlock } from './fruitBanner.js';

export function putFruitData(fruitData) {

    // The function putFruitData() is used to display the fruit data on the main page.
    // The function takes the fruitData as an argument and then creates a block for each fruit.
    let count = 0;
    // The forEach() method is used to iterate over the fruit data and create a block for each fruit.
    fruitData.forEach(fruit => {
        if (count < 10) {
            createBlock(fruit);
            count++;
        }
    });


    if (count < 10) {
        console.log(`Only ${count} fruits found, less than 10.`);
    } else {
        console.log(`${count} fruits displayed.`);
    }
}