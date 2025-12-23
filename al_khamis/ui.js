// al_khamis/ui.js
import * as HomeScreen from "./screens/home.js";
import * as SettingsScreen from "./screens/settings.js";
import * as ProfileScreen from "./screens/profile.js";
import * as FeedScreen from "./screens/feed.js";

const registry = {
  home: HomeScreen,
  settings: SettingsScreen,
  profile: ProfileScreen,
  feed: FeedScreen,
};

export function initUI() {
  const app = document.getElementById("app");

  // Build sidebar
  const sidebar = document.createElement("aside");
  sidebar.id = "sidebar";

  const line = document.createElement("div");
  line.id = "sidebar-line";
  sidebar.appendChild(line);

  const nav = document.createElement("nav");
  nav.id = "icon-list";

  // Home icon
  const homeBtn = document.createElement("button");
  homeBtn.className = "icon-btn";
  homeBtn.dataset.screen = "home";
  homeBtn.textContent = "🏠";
  nav.appendChild(homeBtn);

  // Settings icon
  const settingsBtn = document.createElement("button");
  settingsBtn.className = "icon-btn";
  settingsBtn.dataset.screen = "settings";
  settingsBtn.textContent = "⚙️";
  nav.appendChild(settingsBtn);

  sidebar.appendChild(nav);
  app.appendChild(sidebar);

  // Content area
  const content = document.createElement("main");
  content.id = "content";
  app.appendChild(content);

  let current = null;

  function loadScreen(name) {
    if (current?.cleanup) current.cleanup();
    content.innerHTML = "";

    const screen = registry[name];
    if (!screen || typeof screen.render !== "function") {
      const fallback = document.createElement("div");
      fallback.textContent = `Screen "${name}" not found.`;
      content.appendChild(fallback);
      return;
    }

    const node = screen.render();
    content.appendChild(node);
    current = screen;
  }

  // Inside initUI() in ui.js
const profileBtn = document.createElement("button");
profileBtn.className = "icon-btn";
profileBtn.dataset.screen = "profile"; // must match registry key
profileBtn.textContent = "👤"; // icon
nav.appendChild(profileBtn);

const feedBtn = document.createElement("button");
feedBtn.className = "icon-btn";
feedBtn.dataset.screen = "feed";
feedBtn.textContent = "📰";
nav.appendChild(feedBtn);


  // Icon click handling (include all icons)
[homeBtn, settingsBtn, profileBtn, feedBtn].forEach(btn => {
  btn.addEventListener("click", () => {
    [homeBtn, settingsBtn, profileBtn, feedBtn].forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    loadScreen(btn.dataset.screen);
  });
});


  // Boot default
  homeBtn.classList.add("active");
  loadScreen("home");
}
