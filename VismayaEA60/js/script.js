// =====================================
// ArtVista - script.js
// =====================================

// Welcome Message
console.log("Welcome to ArtVista!");

// Smooth Fade-in Animation
document.addEventListener("DOMContentLoaded", function () {

    const cards = document.querySelectorAll(".card");

    cards.forEach((card, index) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";

        setTimeout(() => {

            card.style.transition = "all 0.8s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }, index * 150);

    });

});

// Navbar Shadow on Scroll
window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 30) {

        navbar.classList.add("shadow-lg");

    } else {

        navbar.classList.remove("shadow-lg");

    }

});

// Button Hover Effect
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "scale(1.05)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "scale(1)";

    });

});

// Image Zoom Effect
const images = document.querySelectorAll("img");

images.forEach(image => {

    image.addEventListener("mouseenter", () => {

        image.style.transition = "0.4s";
        image.style.transform = "scale(1.03)";

    });

    image.addEventListener("mouseleave", () => {

        image.style.transform = "scale(1)";

    });

});

// Scroll-to-Top Button
const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.style.position = "fixed";
topButton.style.bottom = "20px";
topButton.style.right = "20px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#ffc107";
topButton.style.color = "#000";
topButton.style.fontSize = "22px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.zIndex = "999";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 250) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

// Simple Loading Message
window.onload = function () {

    console.log("ArtVista Website Loaded Successfully.");

};

// Card Hover Shadow
const allCards = document.querySelectorAll(".card");

allCards.forEach(card => {

    card.addEventListener("mouseover", () => {

        card.style.boxShadow = "0 15px 30px rgba(0,0,0,0.25)";

    });

    card.addEventListener("mouseout", () => {

        card.style.boxShadow = "";

    });

});