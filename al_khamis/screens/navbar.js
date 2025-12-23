// al_khamis/screens/navbar.js
export function createNavbar() {
  const nav = document.createElement("div");
  nav.style.display = "flex";
  nav.style.flexWrap = "wrap";
  nav.style.gap = "10px";
  nav.style.marginBottom = "20px";
  nav.style.borderBottom = "1px solid cyan";
  nav.style.paddingBottom = "15px";

  const links = [
    { id: "home", text: "Home" },
    { id: "profile", text: "Profile" },
    { id: "feed", text: "Feed" },
    { id: "universal_ai", text: "Universal AI" },
    { id: "settings", text: "Settings" },
  ];

  links.forEach(link => {
    const btn = document.createElement("button");
    btn.textContent = link.text;
    btn.style.background = "rgba(0, 255, 255, 0.05)";
    btn.style.border = "1px solid cyan";
    btn.style.color = "cyan";
    btn.style.padding = "8px 16px";
    btn.style.cursor = "pointer";
    btn.style.fontFamily = "inherit";
    btn.style.textShadow = "0 0 5px cyan";
    btn.style.transition = "background 0.2s";

    btn.onmouseenter = () => btn.style.background = "rgba(0, 255, 255, 0.2)";
    btn.onmouseleave = () => btn.style.background = "rgba(0, 255, 255, 0.05)";

    btn.onclick = () => {
      window.dispatchEvent(new CustomEvent("navigate-screen", { detail: link.id }));
    };

    nav.appendChild(btn);
  });

  return nav;
}