// SUN ↔ MOON (UI only)
const themeToggle = document.getElementById("themeToggle");
themeToggle?.addEventListener("click", () => {
  themeToggle.textContent =
    themeToggle.textContent === "🌞" ? "🌙" : "🌞";
});

// HAMBURGER MENU
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger?.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
// ❓ FAQ TOGGLE
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;

    answer.classList.toggle("show");
    question.classList.toggle("active");
  });
});


// CONTACT FORM
document.querySelector(".contact-form")?.addEventListener("submit", e => {
  e.preventDefault();
  document.getElementById("successMsg").innerText =
    "Message submitted successfully (demo).";
});
