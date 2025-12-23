// al_khamis/screens/feed.js
export function render() {
  const wrap = document.createElement("div");
  wrap.style.color = "cyan";
  wrap.style.padding = "20px";

  const title = document.createElement("h1");
  title.textContent = "Institute Feed";
  title.style.textShadow = "0 0 12px cyan";
  wrap.appendChild(title);

  const info = document.createElement("p");
  info.textContent = "Share future updates here:";
  wrap.appendChild(info);

  // Input field
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Type your update...";
  input.style.width = "60%";
  input.style.padding = "10px";
  input.style.marginTop = "10px";
  input.style.border = "1px solid cyan";
  input.style.background = "black";
  input.style.color = "cyan";
  input.style.textShadow = "0 0 8px cyan";
  wrap.appendChild(input);

  // Submit button
  const button = document.createElement("button");
  button.textContent = "Post Update";
  button.style.marginLeft = "10px";
  button.style.padding = "10px 20px";
  button.style.border = "1px solid cyan";
  button.style.background = "transparent";
  button.style.color = "cyan";
  button.style.cursor = "pointer";
  button.style.textShadow = "0 0 8px cyan";
  button.onmouseenter = () => button.style.background = "rgba(0,255,255,0.1)";
  button.onmouseleave = () => button.style.background = "transparent";
  wrap.appendChild(button);

  // Updates list
  const updatesList = document.createElement("div");
  updatesList.style.marginTop = "20px";
  updatesList.style.display = "flex";
  updatesList.style.flexDirection = "column";
  updatesList.style.gap = "10px";
  wrap.appendChild(updatesList);

  // Button click → add update
  button.onclick = () => {
    const text = input.value.trim();
    if (text) {
      const update = document.createElement("div");
      update.textContent = text;
      update.style.border = "1px solid cyan";
      update.style.padding = "8px";
      update.style.textShadow = "0 0 8px cyan";
      updatesList.appendChild(update);
      input.value = "";
    }
  };

  wrap.cleanup = () => {};
  return wrap;
}

export function cleanup() {}