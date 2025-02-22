import { functionBannerLoop } from "./cssAnimation.js";
import { getData } from "./getData.js";
import { putFruitData } from "./showFruit.js";
import { setlocalStorage } from "./services.js";

// Currently, the API does not support CORS, so I am using a proxy to bypass this issue
const urlFruit = "https://api.allorigins.win/raw?url=https://www.fruityvice.com/api/fruit/all";
let bannerStatus = 1;
let bannerTimer = 4000;

let bannerLoop = new functionBannerLoop(bannerStatus, bannerTimer);

async function fetchAndDisplayFruitData() {
    try {
        const fruitData = await getData(urlFruit);
        putFruitData(fruitData);
    } catch (error) {
        console.error("Error fetching fruit data:", error);
    }
}

fetchAndDisplayFruitData();

setInterval(() => {
    bannerLoop.startBannerLoop();
    bannerStatus = (bannerStatus % 3) + 1;
    bannerLoop = new functionBannerLoop(bannerStatus, bannerTimer);
    bannerLoop.startBannerLoop();
}, bannerTimer);