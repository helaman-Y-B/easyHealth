class functionBannerLoop {

    constructor(bannerStatus, bannerTimer) {
        this.bannerStatus = bannerStatus;
        this.bannerTimer = bannerTimer;
    }

    startBannerLoop() {
        if (this.bannerStatus === 1) {
            document.getElementById("imgban2").style.opacity = "0";

            document.getElementById("imgban1").style.right = "0px";
            document.getElementById("imgban1").style.zIndex = "1000";
            document.getElementById("imgban2").style.right = "-1200px";
            document.getElementById("imgban2").style.zIndex = "1500";
            document.getElementById("imgban3").style.right = "1200px";
            document.getElementById("imgban3").style.zIndex = "500";

            document.getElementById("imgban2").style.opacity = "1";

            bannerStatus = 2;

        } else if (bannerStatus === 2) {
            document.getElementById("imgban3").style.opacity = "0";

            document.getElementById("imgban2").style.right = "0px";
            document.getElementById("imgban2").style.zIndex = "1000";
            document.getElementById("imgban3").style.right = "-1200px";
            document.getElementById("imgban3").style.zIndex = "1500";
            document.getElementById("imgban1").style.right = "1200px";
            document.getElementById("imgban1").style.zIndex = "500";

            document.getElementById("imgban3").style.opacity = "1";

            bannerStatus = 3;

        } else if (bannerStatus === 3) {
            document.getElementById("imgban1").style.opacity = "0";

            document.getElementById("imgban3").style.right = "0px";
            document.getElementById("imgban3").style.zIndex = "1000";
            document.getElementById("imgban1").style.right = "-1200px";
            document.getElementById("imgban1").style.zIndex = "1500";
            document.getElementById("imgban2").style.right = "1200px";
            document.getElementById("imgban2").style.zIndex = "500";

            document.getElementById("imgban1").style.opacity = "1";

            bannerStatus = 1;
        }
    }
}

