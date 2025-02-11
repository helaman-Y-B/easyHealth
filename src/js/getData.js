// Currently, the API does not support CORS, so I am using a proxy to bypass this issue
const urlFruit = "https://cors-anywhere.herokuapp.com/https://www.fruityvice.com/api/fruit/all";
//const urlImage = `https://www.fruityvice.com/api/fruit/${fruit.name}/image`;

export async function getFruits() {
    const res = await fetch(urlFruit);

    if (!res.ok) {
        throw new Error('Network response was not ok');
    } else {
        const data = await res.json();
        return data;
    }
}

// Url tutorial: https://publicapis.io/fruity-vice-food-api