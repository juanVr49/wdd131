// Footer dates
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastmodified").textContent = document.lastModified;

// Read GET params from the URL
const params = new URLSearchParams(window.location.search);
const results = document.getElementById("results");

function addRow(label, value) {
  const dt = document.createElement("dt");
  dt.textContent = label;

  const dd = document.createElement("dd");
  dd.textContent = value && value.trim() ? value : "(not provided)";

  results.appendChild(dt);
  results.appendChild(dd);
}

addRow("Product", params.get("product"));
addRow("Rating", params.get("rating"));
addRow("Installation Date", params.get("installDate"));

// Checkboxes: can have multiple values with same name
const features = params.getAll("features");
addRow("Useful Features", features.length ? features.join(", ") : "(none selected)");

addRow("Written Review", params.get("review"));
addRow("User Name", params.get("userName"));
