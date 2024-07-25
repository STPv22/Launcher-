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
        width: 20%;
        height: 100%;
        background-color: rgb(24, 24, 24);
        border: none;`;

    var navbar = document.createElement("ul");
    navbar.style = `
        list-style-type: none;
        padding: 0px;
        margin: 0px;
        overflow: hidden;
        `;

    var playOption = document.createElement("li");
    playOption.innerHTML = `<a href="" style="font-weight: bold; margin: 15px; display: block;">Play</a>`;
    playOption.style = `
        float: left;
        `;

    var installationOption = document.createElement("li");
    installationOption.innerHTML = `<a href="" style="margin: 15px; display: block;">Installations</a>`;

    
    var bannerImage = document.createElement("img");
    bannerImage.src = "./assets/banner.png";
    bannerImage.style = `
        width: 80%;
        margin-left: 0px;
        margin-top: 15px;
        `;

    document.addEventListener("DOMContentLoaded", (event) => {

        navbar.appendChild(playOption);
        navbar.appendChild(installationOption);
        document.body.appendChild(navbar);
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