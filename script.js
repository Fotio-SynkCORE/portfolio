console.log("Welcome to Fotio Precious' Portfolio!");

// Mobile Menu
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// Dark Mode
const themeToggle = document.getElementById("theme-toggle");

if(themeToggle){
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");

        const icon = themeToggle.querySelector("i");

        if(document.body.classList.contains("light-mode")){
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        }else{
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        }
    });
}

const slides = document.querySelectorAll(".slide");

let current = 0;

if (slides.length > 0) {
  
  setInterval(() => {
    
    slides[current].classList.remove("active");
    
    current = (current + 1) % slides.length;
    
    slides[current].classList.add("active");
    
  }, 3000);
  
}
