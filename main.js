// Hamburger menu: mostrare / nascondere il menu principale

let hamburgerIconBars = document.querySelector("i.fa-bars");
let hamburgerIconTimes = document.querySelector("i.fa-times");
let hamburgerMenu = document.querySelector("div.hamburger-menu");
console.log(hamburgerIconBars, hamburgerIconTimes, hamburgerMenu);

// mostrare menu
hamburgerIconBars.addEventListener("click",
    function() {
        hamburgerMenu.style.display = "block";
    }
);

// nascondere menu
hamburgerIconTimes.addEventListener("click",
    function() {
        hamburgerMenu.style.display = "none";
    }
);