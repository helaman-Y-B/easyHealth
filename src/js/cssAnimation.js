export class functionBannerLoop {

    constructor(bannerStatus, bannerTimer) {
        this.bannerStatus = bannerStatus;
        this.bannerTimer = bannerTimer;
    }

    startBannerLoop() {

        try {
            if (this.bannerStatus === 1) {
                document.getElementById("imgban2").style.opacity = "0";
    
                setTimeout(() => {
                    document.getElementById("imgban1").style.right = "0%";
                    document.getElementById("imgban1").style.zIndex = "1000";
                    document.getElementById("imgban2").style.right = "-100%";
                    document.getElementById("imgban2").style.zIndex = "1500";
                    document.getElementById("imgban3").style.right = "100%";
                    document.getElementById("imgban3").style.zIndex = "500";
                }, 500);
    
                setTimeout(() => {
                    document.getElementById("imgban2").style.opacity = "1";
                }, 1500);
    
                this.bannerStatus = 2;
    
            } else if (this.bannerStatus === 2) {
                document.getElementById("imgban3").style.opacity = "0";
    
                setTimeout(() => {
                    document.getElementById("imgban2").style.right = "0%";
                    document.getElementById("imgban2").style.zIndex = "1000";
                    document.getElementById("imgban3").style.right = "-100%";
                    document.getElementById("imgban3").style.zIndex = "1500";
                    document.getElementById("imgban1").style.right = "100%";
                    document.getElementById("imgban1").style.zIndex = "500";
                }, 500);
    
                setTimeout(() => {
                    document.getElementById("imgban3").style.opacity = "1";
                }, 1500);
    
                this.bannerStatus = 3;
    
            } else if (this.bannerStatus === 3) {
                document.getElementById("imgban1").style.opacity = "0";
    
                setTimeout(() => {
                    document.getElementById("imgban3").style.right = "0%";
                    document.getElementById("imgban3").style.zIndex = "1000";
                    document.getElementById("imgban1").style.right = "-100%";
                    document.getElementById("imgban1").style.zIndex = "1500";
                    document.getElementById("imgban2").style.right = "100%";
                    document.getElementById("imgban2").style.zIndex = "500";
                }, 500);
    
                setTimeout(() => {
                    document.getElementById("imgban1").style.opacity = "1";
                }, 1500);
    
                this.bannerStatus = 1;
            }
        } catch (error) {
            console.log(error);
            return;
        }
    }
}


