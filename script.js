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
    document.querySelector("#burger").addEventListener("click", showBurger);
    document.querySelector("#burgerOff").addEventListener("click", hideBurger);
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
