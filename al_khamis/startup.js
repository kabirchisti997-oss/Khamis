// al_khamis/startup.js
export function initParticles() {
  const canvas = document.getElementById("particles");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = Array.from({ length: 100 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2,
    dx: (Math.random() - 0.5) * 1.5,
    dy: (Math.random() - 0.5) * 1.5,
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "cyan";
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();
      p.x += p.dx;
      p.y += p.dy;
      if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
    });
    requestAnimationFrame(draw);
  }
  draw();
}
