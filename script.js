console.log("Welcome to Fotio Precious' Portfolio!");


// ================================
// MOBILE MENU
// ================================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("show");

    });

}


// ================================
// DARK / LIGHT MODE
// ================================

const themeToggle = document.getElementById("theme-toggle");


// Get the theme saved in the browser
const savedTheme = localStorage.getItem("theme");


// Apply saved theme when the page loads
if (savedTheme === "light") {

    document.body.classList.add("light-mode");

}


// Update the theme icon
function updateThemeIcon() {

    if (!themeToggle) return;

    const icon = themeToggle.querySelector("i");

    if (!icon) return;


    if (document.body.classList.contains("light-mode")) {

        icon.classList.remove("fa-moon");

        icon.classList.add("fa-sun");

    } else {

        icon.classList.remove("fa-sun");

        icon.classList.add("fa-moon");

    }

}


// Set the correct icon when the page loads
updateThemeIcon();


// Theme button
if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");


        // Save the user's choice
        if (document.body.classList.contains("light-mode")) {

            localStorage.setItem("theme", "light");

        } else {

            localStorage.setItem("theme", "dark");

        }


        // Update icon
        updateThemeIcon();

    });

}


// ================================
// SLIDESHOW
// ================================

const slides = document.querySelectorAll(".slide");

let current = 0;

if (slides.length > 0) {

    setInterval(() => {

        slides[current].classList.remove("active");

        current = (current + 1) % slides.length;

        slides[current].classList.add("active");

    }, 3000);

}
