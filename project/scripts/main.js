// Footer dates
document.getElementById("currentyear").textContent = `${new Date().getFullYear()}`;
document.getElementById("lastmodified").textContent = `${document.lastModified}`;

// Mobile menu
const menuBtn = document.querySelector("#menu");
const nav = document.querySelector("#site-nav");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
    const isOpen = nav.classList.contains("open");
    menuBtn.setAttribute("aria-expanded", `${isOpen}`);
    menuBtn.setAttribute("aria-label", `${isOpen ? "Close menu" : "Open menu"}`);
  });
}
