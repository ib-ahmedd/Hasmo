let navBar = document.getElementById("smallScreenNavBar");
let shade = document.getElementById("shade");
let menuToggle = document.getElementById("menuToggle");
let pageBody = document.getElementById("content")

function toggleMenu(){
    navBar.style.transform= "translateX(0)";
    shade.style.display= "block";
    pageBody.style.overflow= "hidden";
}

function closeMenu(){
    navBar.style.transform= "translateX(-120%)";
    shade.style.display= "none";
    pageBody.style.overflow= "auto";
}

