// al_khamis/screens/profile.js
export function render() {
  const wrap = document.createElement("div");
  wrap.style.color = "cyan";
  wrap.style.padding = "20px";

  const title = document.createElement("h1");
  title.textContent = "Profile Screen";
  title.style.textShadow = "0 0 12px cyan";
  wrap.appendChild(title);

  wrap.cleanup = () => {};
  return wrap;
}

export function cleanup() {}
