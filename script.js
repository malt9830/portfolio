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
}
