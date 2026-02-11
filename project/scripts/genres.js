const genres = [
  {
    name: "Lo-fi / Instrumental",
    goal: "focus",
    description: "Soft beats and minimal vocals can help reduce distractions during study sessions.",
    tips: ["Keep volume low", "Try instrumental playlists", "Use for deep work blocks"],
    image: { src: "images/focus.webp", alt: "A desk setup for studying" }
  },
  {
    name: "Classical / Ambient",
    goal: "relax",
    description: "Slow, consistent textures can help calm the mind and support stress recovery.",
    tips: ["Choose slower tempo", "Avoid sudden changes", "Use after stressful moments"],
    image: { src: "images/relax.webp", alt: "Calm scene representing relaxation" }
  },
  {
    name: "Upbeat Pop / EDM",
    goal: "energy",
    description: "Higher energy tracks can boost motivation and make repetitive tasks feel easier.",
    tips: ["Great for chores", "Use in short bursts", "Avoid for reading-heavy tasks"],
    image: { src: "images/energy.webp", alt: "Headphones representing energetic music" }
  }
];

const grid = document.querySelector("#genre-grid");
const statusEl = document.querySelector("#genre-status");
const chips = document.querySelectorAll(".chip");

function renderGenreCards(items) {
  if (!grid) return;

  grid.innerHTML = items.map((g) => `
    <article class="card">
      <h3>${g.name}</h3>
      <p><strong>Best for:</strong> ${g.goal}</p>
      <p>${g.description}</p>
      <img src="${g.image.src}" alt="${g.image.alt}" width="800" height="500" loading="lazy">
      <h4>Tips</h4>
      <ul>
        ${g.tips.map((t) => `<li>${t}</li>`).join("")}
      </ul>
    </article>
  `).join("");

  if (statusEl) {
    statusEl.textContent = `${items.length} genre recommendation(s) shown.`;
  }
}

function setActiveChip(goal) {
  chips.forEach((btn) => {
    const isActive = btn.dataset.goal === goal;
    btn.classList.toggle("active", isActive);
  });
}

function filterByGoal(goal) {
  const filtered = goal === "all"
    ? genres
    : genres.filter((g) => g.goal === goal);

  setActiveChip(goal);
  renderGenreCards(filtered);
}

chips.forEach((btn) => {
  btn.addEventListener("click", () => {
    const goal = `${btn.dataset.goal}`;
    filterByGoal(goal);
  });
});

// initial render
filterByGoal("all");
