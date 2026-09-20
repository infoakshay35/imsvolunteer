// Scroll reveal animation
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
  }
);

reveals.forEach((element) => {
  observer.observe(element);
});


// Scroll progress bar
const progress = document.querySelector(".progress");

window.addEventListener("scroll", () => {
  const scrollHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  const scrollPosition = window.scrollY;

  const percentage = scrollHeight
    ? (scrollPosition / scrollHeight) * 100
    : 0;

  progress.style.width = `${percentage}%`;
});


// Smooth navigation
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");

    if (!targetId || targetId === "#") return;

    const target = document.querySelector(targetId);

    if (target) {
      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});


// Add a small shadow to navbar when scrolling
const navbar = document.querySelector(".nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
