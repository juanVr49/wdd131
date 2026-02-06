// Footer dates (common assignment requirement)
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastmodified").textContent = document.lastModified;

// Product array (replace with the one your instructor provides if different)
const products = [
  { id: "p100", name: "HydroClean Filter" },
  { id: "p200", name: "SolarCharge Kit" },
  { id: "p300", name: "AquaGuard Sealant" },
  { id: "p400", name: "ProVent Fan" }
];

// Build select options dynamically
const select = document.getElementById("product");

products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.name;   // must be product name
  option.textContent = product.name;
  select.appendChild(option);
});
