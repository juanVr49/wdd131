// Footer: current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Footer: last modified date
document.getElementById("lastmodified").textContent = document.lastModified;

// Hamburger menu toggle
const hamButton = document.querySelector("#menu");
const nav = document.querySelector("nav");

hamButton.addEventListener("click", () => {
  nav.classList.toggle("open");
  hamButton.classList.toggle("open");

  const isOpen = nav.classList.contains("open");
  hamButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});
