window.addEventListener("load", sidenVises);

window.onscroll = function () {
    console.log("scroll");
    if (window.scrollY > 75) {
        document.querySelector("#header").classList.add("active");
    } else {
        document.querySelector("#header").classList.remove("active");
    }
}

function sidenVises() {
    console.log("sidenVises");

    //Burger menu
    document.querySelector("#burger").addEventListener("click", showBurger);
    document.querySelector("#burgerOff").addEventListener("click", hideBurger);


    //Banner highlights
    document.querySelector("#banner_web").addEventListener("mouseover", highlightWeb);
    document.querySelector("#banner_ux").addEventListener("mouseover", highlightUX);
    document.querySelector("#banner_animation").addEventListener("mouseover", highlightAnimation);
    document.querySelector("#banner_content").addEventListener("mouseover", highlightContent);

    document.querySelector("#banners").addEventListener("mouseout", removeHighlight);
}

function showBurger() {
    console.log("showBurger");
    document.querySelector("#burger").classList.add("hidden");
    document.querySelector("#burgerOff").classList.remove("hidden");

    document.querySelector("#burgerItems").classList.remove("hidden");

    document.querySelector("#header").classList.add("active");
}

function hideBurger() {
    console.log("hideBurger");
    document.querySelector("#burger").classList.remove("hidden");
    document.querySelector("#burgerOff").classList.add("hidden");

    document.querySelector("#burgerItems").classList.add("hidden");

    if (window.scrollY < 75) {
        document.querySelector("#header").classList.remove("active");
    }
}

function highlightWeb() {
    console.log("highlightWeb");
    document.querySelector("#banner_ux").classList.add("grey");
    document.querySelector("#banner_animation").classList.add("grey");
    document.querySelector("#banner_content").classList.add("grey");
}

function highlightUX() {
    console.log("highlightUX");
    document.querySelector("#banner_web").classList.add("grey");
    document.querySelector("#banner_animation").classList.add("grey");
    document.querySelector("#banner_content").classList.add("grey");
}

function highlightAnimation() {
    console.log("highlightAnimation");
    document.querySelector("#banner_web").classList.add("grey");
    document.querySelector("#banner_ux").classList.add("grey");
    document.querySelector("#banner_content").classList.add("grey");
}

function highlightContent() {
    console.log("highlightContent");
    document.querySelector("#banner_web").classList.add("grey");
    document.querySelector("#banner_ux").classList.add("grey");
    document.querySelector("#banner_animation").classList.add("grey");
}

function removeHighlight() {
    console.log("removeHighlight");

    document.querySelector("#banner_web").classList.remove("grey");
    document.querySelector("#banner_ux").classList.remove("grey");
    document.querySelector("#banner_animation").classList.remove("grey");
    document.querySelector("#banner_content").classList.remove("grey");

}
