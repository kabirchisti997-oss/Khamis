import * as SettingsScreen from "./screens/settings.js";

document.addEventListener("DOMContentLoaded", () => {
  console.log("Al Khamis Hub loaded");
  const content = document.getElementById("content");

  // Simple Router
  function renderHome() {
    content.innerHTML = "";
    const div = document.createElement("div");
    div.style.padding = "40px";
    div.innerHTML = "<h1 style='text-shadow:0 0 10px cyan'>Welcome to Al Khamis Hub</h1><p>Select an option from the menu to begin.</p>";
    content.appendChild(div);
  }

  function renderSettings() {
    content.innerHTML = "";
    content.appendChild(SettingsScreen.render());
  }

  document.getElementById("nav-home").addEventListener("click", renderHome);
  document.getElementById("nav-settings").addEventListener("click", renderSettings);

  // Initialize
  renderHome();
});
