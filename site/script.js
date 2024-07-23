var splashtext = document.getElementById("loadingSplashText");
splashtext.innerHTML = "loading..."

var loadingOverlay = document.getElementById("loadingOverlay");



function init() {
    //update body styles
    document.body.style.overflowX = "hidden";
    document.body.style.overflowY = "scroll";
    document.body.style.backgroundColor = "rgb(50, 50, 50)";
    document.body.style.left = "20%";

    //create elements for launcher
    var sideBar = document.createElement("div");
    sideBar.style = `
        position: fixed;
        left: 0;
        top: 0;
        background-color: rgb(24, 24, 24);
        border: none;`;
    
    var bannerImage = document.createElement("img");
    bannerImage.src = "./assets/banner.png";
    bannerImage.style = `
        width: 100%;
        `;

    //testing
    document.addEventListener("DOMContentLoaded", (event) => {
        console.log("DOM fully loaded and parsed");

        document.body.appendChild(bannerImage);
        document.body.appendChild(sideBar);

        loadingOverlay.remove();
    });
}

function clientLaunch() {
    if (getIfClientInstalled()) {

    } else {

    }
}

function getIfClientInstalled() {
    return false;
}

init();