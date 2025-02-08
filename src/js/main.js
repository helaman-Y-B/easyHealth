import { functionBannerLoop } from './cssAnimation.js';



let bannerStatus = 1;
let bannerTimer = 4000;

const bannerLoop = new functionBannerLoop(bannerStatus, bannerTimer);
setInterval(() => {
    bannerLoop.startBannerLoop();
    bannerStatus = (bannerStatus % 3) + 1;
    new functionBannerLoop(bannerStatus, bannerTimer).startBannerLoop();
}, bannerTimer);