import { functionBannerLoop } from './cssAnimation.js';

let bannerStatus = 1;
let bannerTimer = 4000;

let bannerLoop = new functionBannerLoop(bannerStatus, bannerTimer);
setInterval(() => {
    bannerLoop.startBannerLoop();
    bannerStatus = (bannerStatus % 3) + 1;
    bannerLoop = new functionBannerLoop(bannerStatus, bannerTimer);
    bannerLoop.startBannerLoop();
}, bannerTimer);