let hamburger = document.querySelector(".hamburger");
let navbar = document.querySelector(".navbar");
let line1 = document.querySelector(".line1");
let line2 = document.querySelector(".line2");
let line3 = document.querySelector(".line3");

hamburger.addEventListener("click",() => {
    line1.classList.toggle("line-1");
    line2.classList.toggle("line-2");
    line3.classList.toggle("line-3");
    navbar.classList.toggle("navbar-hidden");
})