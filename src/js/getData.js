// Currently, the API does not support CORS, so I am using a proxy to bypass this issue
const url = "https://cors-anywhere.herokuapp.com/https://www.fruityvice.com/api/fruit/all";

export async function getFruits() {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error('Network response was not ok');
    } else {

        const data = await res.json();
        console.log(data);
        return data;
    }
}

// Url tutorial: https://publicapis.io/fruity-vice-food-api