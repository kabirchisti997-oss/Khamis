// al_khamis/screens/home.js
export function render() {
  const wrap = document.createElement("div");
  wrap.style.position = "relative";
  wrap.style.width = "100%";
  wrap.style.height = "100%";
  wrap.style.color = "cyan";
  wrap.style.padding = "20px";

  const title = document.createElement("h1");
  title.textContent = "Home Screen";
  title.style.textShadow = "0 0 12px cyan";
  wrap.appendChild(title);

  // Canvas computer logo
  const canvas = document.createElement("canvas");
  canvas.width = 200;
  canvas.height = 150;
  canvas.style.display = "block";
  canvas.style.marginTop = "20px";
  wrap.appendChild(canvas);

  const ctx = canvas.getContext("2d");
  ctx.strokeStyle = "cyan";
  ctx.lineWidth = 3;
  ctx.shadowColor = "cyan";
  ctx.shadowBlur = 15;

  // Draw monitor rectangle
  ctx.strokeRect(20, 20, 160, 90);

  // Draw stand
  ctx.beginPath();
  ctx.moveTo(100, 110);
  ctx.lineTo(100, 130);
  ctx.stroke();

  // Draw base
  ctx.beginPath();
  ctx.moveTo(70, 130);
  ctx.lineTo(130, 130);
  ctx.stroke();

  wrap.cleanup = () => {};
  return wrap;
}

export function cleanup() {}
