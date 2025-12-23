// al_khamis/screens/universal_ai.js
import { createNavbar } from "./navbar.js";

export function render() {
  const wrap = document.createElement("div");
  wrap.style.color = "cyan";
  wrap.style.padding = "20px";

  wrap.appendChild(createNavbar());

  const title = document.createElement("h1");
  title.textContent = "Universal AI";
  title.style.textShadow = "0 0 12px cyan";
  wrap.appendChild(title);

  const info = document.createElement("p");
  info.textContent = "This is the Universal AI hub — future AI features will live here.";
  wrap.appendChild(info);

  // Example glowing panel
  const panel = document.createElement("div");
  panel.textContent = "AI Engine Placeholder";
  panel.style.marginTop = "20px";
  panel.style.padding = "15px";
  panel.style.border = "2px solid cyan";
  panel.style.textAlign = "center";
  panel.style.boxShadow = "0 0 20px cyan inset";
  wrap.appendChild(panel);

  wrap.cleanup = () => {};
  return wrap;
}

export function cleanup() {}
