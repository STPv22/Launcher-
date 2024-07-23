var splashtext = document.getElementById("loadingSplashText");
splashtext.innerHTML = "loading..."


function init() {
    var sideBar = document.createElement("div");

    document.addEventListener("DOMContentLoaded", (event) => {
        console.log("DOM fully loaded and parsed");

        document.body.appendChild(sideBar);
    });
}