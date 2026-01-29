// ----------------------
// Footer dates
// ----------------------
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastmodified").textContent = document.lastModified;

// ----------------------
// Hamburger menu
// ----------------------
const hamButton = document.querySelector("#menu");
const nav = document.querySelector("nav");

hamButton.addEventListener("click", () => {
  nav.classList.toggle("open");
  hamButton.classList.toggle("open");

  const isOpen = nav.classList.contains("open");
  hamButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

// ----------------------
// Temple data (7 given + 3 extra)
// ----------------------
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },

  // ✅ Extra 3
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253000,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-temple/400x250/salt-lake-temple-lds-1055113-wallpaper.jpg",
  },
  {
    templeName: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/400x250/rome_italy_temple_lds_4906517.jpg",
  },
  {
    templeName: "Bern Switzerland Temple",
    location: "Zollikofen, Switzerland",
    dedicated: "1955, September, 11",
    area: 35000,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bern-switzerland/400x250/bern-switzerland-temple-lds-784289-wallpaper.jpg",
  },
];

// ----------------------
// Display temples
// ----------------------
const cardsContainer = document.querySelector("#templeCards");

function getDedicatedYear(dedicatedString) {
  // "2005, August, 7" -> 2005
  return Number(dedicatedString.split(",")[0]);
}

function displayTemples(templeList) {
  cardsContainer.innerHTML = "";

  templeList.forEach((temple) => {
    const card = document.createElement("figure");
    card.classList.add("temple-card");

    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = "lazy";

    const caption = document.createElement("figcaption");
    caption.innerHTML = `
      <h3>${temple.templeName}</h3>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
    `;

    card.appendChild(img);
    card.appendChild(caption);
    cardsContainer.appendChild(card);
  });
}

// show all on load
displayTemples(temples);

// ----------------------
// Filters
// ----------------------
function setActive(id) {
  document.querySelectorAll("nav a").forEach((a) => a.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function closeMenu() {
  // helpful on mobile after clicking a filter
  nav.classList.remove("open");
  hamButton.classList.remove("open");
  hamButton.setAttribute("aria-label", "Open menu");
}

document.getElementById("home").addEventListener("click", (e) => {
  e.preventDefault();
  setActive("home");
  displayTemples(temples);
  closeMenu();
});

document.getElementById("old").addEventListener("click", (e) => {
  e.preventDefault();
  setActive("old");
  const filtered = temples.filter((t) => getDedicatedYear(t.dedicated) < 1900);
  displayTemples(filtered);
  closeMenu();
});

document.getElementById("new").addEventListener("click", (e) => {
  e.preventDefault();
  setActive("new");
  const filtered = temples.filter((t) => getDedicatedYear(t.dedicated) > 2000);
  displayTemples(filtered);
  closeMenu();
});

document.getElementById("large").addEventListener("click", (e) => {
  e.preventDefault();
  setActive("large");
  const filtered = temples.filter((t) => t.area > 90000);
  displayTemples(filtered);
  closeMenu();
});

document.getElementById("small").addEventListener("click", (e) => {
  e.preventDefault();
  setActive("small");
  const filtered = temples.filter((t) => t.area < 10000);
  displayTemples(filtered);
  closeMenu();
});
