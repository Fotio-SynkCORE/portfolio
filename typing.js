const words = [
  "Software Engineering Student",
  "Web Developer",
  "Mobile App Developer",
  "Tech Entrepreneur"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {
  if (!typingElement) return;

  const currentWord = words[wordIndex];

  if (!isDeleting) {
    typingElement.textContent = currentWord.substring(0, charIndex++);
    if (charIndex > currentWord.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1500);
      return;
    }
  } else {
    typingElement.textContent = currentWord.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      charIndex = 0;
    }
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();
