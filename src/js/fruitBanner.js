import { stringifyObject } from "./services.js";

export function createBlock(fruit, image) {
    const divFruit = document.getElementById("catalog");

    // Create a link element and set the href attribute to the fruit's name
    const linkBlock = document.createElement("a");
    linkBlock.id = fruit.name;
    linkBlock.classList.add("fruit-link");
    linkBlock.href = "./fruit-page/fruit.html";

    // Create a div element and add the class fruit-banner to it
    const fruitBanner = document.createElement("div");
    fruitBanner.classList.add("fruit-banner");

    // Create an image element and set the source to a placeholder image
    const img = document.createElement("img");
    getImgUrl(fruit);
    img.src = "https://placehold.co/150x100";
    img.alt = fruit.name;
    img.classList.add("center-image");

    // Create a header element and add the class fruit-header to it
    const header = document.createElement("h3");
    header.classList.add("fruit-header");
    header.innerHTML = fruit.name;

    // Create a paragraph element and add the class fruit-facts to it
    const paragraph = document.createElement("p");
    paragraph.classList.add("fruit-facts");
    paragraph.innerHTML = `Nutritions:<br>Carbohydrates: ${stringifyObject(fruit.nutritions.carbohydrates)}<br>Fat: ${stringifyObject(fruit.nutritions.fat)}<br>Protein: ${stringifyObject(fruit.nutritions.protein)}<br>Calories: ${stringifyObject(fruit.nutritions.calories)}<br>Sugar: ${stringifyObject(fruit.nutritions.sugar)}`;

    // Append the image, header, and paragraph to the fruitBanner div
    fruitBanner.appendChild(img);
    fruitBanner.appendChild(header);
    fruitBanner.appendChild(paragraph);

    // Append the fruitBanner div to the linkBlock
    linkBlock.appendChild(fruitBanner);

    // Append the linkBlock to the divFruit
    divFruit.appendChild(linkBlock);
}

export function getImgUrl(fruit) {
    const res = fetch(`https://cors-anywhere.herokuapp.com/https://www.fruityvice.com/api/fruit/${fruit.name}/image`);

    console.log(res);

    if (!res.ok) {
        throw new Error('Network response was not ok');
    } else {
        const data = res.json();
        console.log(data);
        return data;
    }
}