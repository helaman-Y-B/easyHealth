import { functionBannerLoop } from './cssAnimation.js';
import { getData } from './getData.js';
import { putFruitData } from './showFruit.js';

// Currently, the API does not support CORS, so I am using a proxy to bypass this issue
const urlFruit = "https://cors-anywhere.herokuapp.com/https://www.fruityvice.com/api/fruit/all";
const urlPrice = "https://cors-anywhere.herokuapp.com/https://www.fruityvice.com/api/fruit/all";
let bannerStatus = 1;
let bannerTimer = 4000;

let bannerLoop = new functionBannerLoop(bannerStatus, bannerTimer);

const fruitData = getData(urlFruit);
const priceData = getData(urlPrice);

putFruitData(fruitData);


setInterval(() => {
    bannerLoop.startBannerLoop();
    bannerStatus = (bannerStatus % 3) + 1;
    bannerLoop = new functionBannerLoop(bannerStatus, bannerTimer);
    bannerLoop.startBannerLoop();
}, bannerTimer);