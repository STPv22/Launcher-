var loadingOverlay = document.getElementById("loadingOverlay");



function init() {
    //update body styles
    document.body.style.overflowX = "hidden";
    document.body.style.overflowY = "scroll";
    document.body.style.backgroundColor = "rgb(50, 50, 50)";
    document.body.style.left = "21%";

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
        text-decoration: none;
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
    var playBar = document.createElement("div");
    playBar.style = `
        margin: 0;
        width: 80%;
        height 10%;
        background-color: black;
        `;
    
    var versionDropdownMenu = document.createElement("div");
    versionDropdownMenu.style = `
        margin: 0;
        width: 10%;
        height: 100%;
        box-sizing: border-box;
    `;
    versionDropdownMenu.innerHTML = "<h4><strong>Latest Release</strong></h4><br><p>u35</p>";


    document.addEventListener("DOMContentLoaded", (event) => {

        document.body.appendChild(sideBar);
        navbar.appendChild(playOption);
        navbar.appendChild(installationOption);
        document.body.appendChild(navbar);
        document.body.appendChild(bannerImage);
        document.body.appendChild(playBar);
         playBar.appendChild(versionDropdownMenu);


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