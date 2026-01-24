// Get the current year
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Get the last modified date
document.getElementById("lastmodified").textContent = document.lastModified;

const temperatureF = 84; // Example temperature in Fahrenheit
const windSpeedMph = 13; // Example wind speed in miles per hour
function calculateWindChill(tempF, windMph) {
        return 35.74 +
        0.6215 * tempF -
        35.75 * Math.pow(windMph, 0.16) +
        0.4275 * tempF * Math.pow(windMph, 0.16);
}
let windChill = "N/A";
if (temperatureF <= 50 && windSpeedMph > 3) {
    windChill = calculateWindChill(temperatureF, windSpeedMph).toFixed(2) + " °F";
}
document.getElementById("windchill").textContent = windChill;