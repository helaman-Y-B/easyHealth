import { functionBannerLoop } from './cssAnimation.js';
import { getFruits } from './getData.js';
import { putFruitData } from './showFruit.js';

let bannerStatus = 1;
let bannerTimer = 4000;

let bannerLoop = new functionBannerLoop(bannerStatus, bannerTimer);

const fruitData = getFruits();

putFruitData(fruitData);


setInterval(() => {
    bannerLoop.startBannerLoop();
    bannerStatus = (bannerStatus % 3) + 1;
    bannerLoop = new functionBannerLoop(bannerStatus, bannerTimer);
    bannerLoop.startBannerLoop();
}, bannerTimer);