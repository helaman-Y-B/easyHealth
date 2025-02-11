import { createBlock } from './fruitBanner.js';

export function putFruitData(fruitData) {

    fruitData.then(data => {
        let count = 0;
        data.forEach(fruit => {
            if (count < 6) {
                console.log(`This is the fruit: ${fruit.name}`);
                createBlock(fruit);
                count++;
            } else {
                return;
            }
        });
    })
    .catch(error => {
        console.log(error);
    });
}
