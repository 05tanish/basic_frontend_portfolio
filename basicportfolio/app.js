// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll for nav links
  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Form submission (dummy)
  const form = document.querySelector(".contact-form");
  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Thank you! Your message has been submitted successfully.");
    form.reset();
  });

  // Optional: scroll animations using Intersection Observer
  const revealElements = document.querySelectorAll(
    ".skills-grid, .projects-grid, .certificates-grid, .about-content"
  );

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  revealElements.forEach(el => observer.observe(el));
});
