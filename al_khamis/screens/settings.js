// al_khamis/screens/settings.js
import * as HomeScreen from "./home.js";
import * as ProfileScreen from "./profile.js";
import * as FeedScreen from "./feed.js";

// Registry of connected screens
export const registry = {
  home: HomeScreen,
  profile: ProfileScreen,
  feed: FeedScreen,
};

export function render() {
  const wrap = document.createElement("div");
  wrap.style.position = "relative";
  wrap.style.width = "100%";
  wrap.style.height = "100%";
  wrap.style.color = "cyan";
  wrap.style.padding = "20px";

  // Title
  const title = document.createElement("h1");
  title.textContent = "Settings";
  title.style.textShadow = "0 0 12px cyan";
  wrap.appendChild(title);

  // Info text
  const info = document.createElement("p");
  info.textContent = "Connector hub: add icons in UI.js, map them here.";
  wrap.appendChild(info);

  // Example toggle
  const toggle = document.createElement("button");
  toggle.textContent = "Toggle Dark Mode";
  toggle.style.marginTop = "20px";
  toggle.style.padding = "10px 20px";
  toggle.style.border = "1px solid cyan";
  toggle.style.background = "transparent";
  toggle.style.color = "cyan";
  toggle.style.cursor = "pointer";
  toggle.style.textShadow = "0 0 8px cyan";
  toggle.onmouseenter = () => toggle.style.background = "rgba(0,255,255,0.1)";
  toggle.onmouseleave = () => toggle.style.background = "transparent";
  wrap.appendChild(toggle);

  wrap.cleanup = () => {};
  return wrap;
}

export function cleanup() {}
