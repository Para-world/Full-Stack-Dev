// For mobile menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Enhanced Rotating Customer Reviews
const reviews = document.querySelectorAll(".review");
let currentReview = 0;

// Show the first review initially
reviews[currentReview].classList.add("active");

function showNextReview() {
  // Hide the current review
  reviews[currentReview].classList.remove("active");

  // Move to the next review
  currentReview = (currentReview + 1) % reviews.length;

  // Show the new active review
  reviews[currentReview].classList.add("active");
}

// Change review every 6 seconds
setInterval(showNextReview, 6000);
