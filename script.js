const header = document.querySelector("header");
let lastScrollY = window.scrollY;



const nav = document.querySelector("nav > ul");
const button = document.querySelector("button");

window.addEventListener("scroll", () =>{
    if(lastScrollY < window.scrollY){
        header.classList.add("nav-hidden");
        // mobile
        nav.setAttribute("data-visible", "false");
        header.classList.add("nav-hidden-mobile");
    }
    else{
        header.classList.remove("nav-hidden");
        // mobile
        header.classList.remove("nav-hidden-mobile");
    }
    lastScrollY = window.scrollY;
});

button.addEventListener("click", () => {
    const visibility = nav.getAttribute("data-visible");
    if(visibility === "false"){
        nav.setAttribute("data-visible", "true");
    }
    else{
        nav.setAttribute("data-visible", "false");
    }
});

