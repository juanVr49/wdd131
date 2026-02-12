const routineForm = document.querySelector("#routine-form");
const goalEl = document.querySelector("#goal");
const durationEl = document.querySelector("#duration");
const lyricsEl = document.querySelector("#lyrics");
const output = document.querySelector("#routine-output");
const msg = document.querySelector("#routine-message");
const clearBtn = document.querySelector("#clear");

const library = [
  { name: "Lo-fi / Instrumental", goal: "focus", lyrics: false },
  { name: "Ambient / Classical", goal: "relax", lyrics: false },
  { name: "Upbeat Pop / EDM", goal: "energy", lyrics: true },
  { name: "Piano Instrumentals", goal: "focus", lyrics: false },
  { name: "Chill Acoustic", goal: "relax", lyrics: true }
];

function savePrefs(prefs) {
  localStorage.setItem("mp_prefs", JSON.stringify(prefs));
}

function loadPrefs() {
  const raw = localStorage.getItem("mp_prefs");
  return raw ? JSON.parse(raw) : null;
}

function clearPrefs() {
  localStorage.removeItem("mp_prefs");
}

function buildBlocks(duration) {
  const d = Number(duration);
  if (d <= 15) return ["10 min focus", "5 min break"];
  if (d <= 30) return ["20 min focus", "5 min break", "5 min review"];
  return ["25 min focus", "5 min break", "25 min focus", "5 min break"];
}

function recommend(goal, lyricsOk) {
  const matches = library.filter((item) => {
    if (item.goal !== goal) return false;
    if (lyricsOk) return true;
    return item.lyrics === false;
  });

  return matches.length ? matches : library.filter((item) => item.goal === goal);
}

function renderRoutine(prefs) {
  if (!output || !msg) return;

  const blocks = buildBlocks(prefs.duration);
  const picks = recommend(prefs.goal, prefs.lyricsOk);

  msg.textContent = `Routine built for ${prefs.goal} (${prefs.duration} minutes).`;

  output.innerHTML = `
    <article class="card">
      <h3>Your Settings</h3>
      <ul>
        <li><strong>Goal:</strong> ${prefs.goal}</li>
        <li><strong>Duration:</strong> ${prefs.duration} minutes</li>
        <li><strong>Lyrics:</strong> ${prefs.lyricsOk ? "Allowed" : "Instrumental preferred"}</li>
      </ul>
    </article>

    <article class="card">
      <h3>Session Blocks</h3>
      <ol>
        ${blocks.map((b) => `<li>${b}</li>`).join("")}
      </ol>
    </article>

    <article class="card">
      <h3>Recommended Styles</h3>
      <ul>
        ${picks.map((p) => `<li>${p.name}</li>`).join("")}
      </ul>
    </article>
  `;
}

function applyPrefsToForm(prefs) {
  if (!prefs) return;
  goalEl.value = `${prefs.goal}`;
  durationEl.value = `${prefs.duration}`;
  lyricsEl.checked = Boolean(prefs.lyricsOk);
}

function getPrefsFromForm() {
  return {
    goal: `${goalEl.value}`,
    duration: `${durationEl.value}`,
    lyricsOk: Boolean(lyricsEl.checked)
  };
}

// events
if (routineForm) {
  routineForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const prefs = getPrefsFromForm();

    if (!prefs.goal) {
      msg.textContent = "Please choose a goal.";
      return;
    }

    savePrefs(prefs);
    renderRoutine(prefs);
  });
}

if (clearBtn) {
  clearBtn.addEventListener("click", () => {
    clearPrefs();
    if (output) output.innerHTML = "";
    if (msg) msg.textContent = "Saved preferences cleared.";
    if (routineForm) routineForm.reset();
  });
}

// init
const saved = loadPrefs();
if (saved) {
  applyPrefsToForm(saved);
  renderRoutine(saved);
}
