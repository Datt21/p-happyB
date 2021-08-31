var colors = ["#8b5642","#f56766", "#fdac53" , "#f5df4d", "#f0f0f0"];

function frame() {
  confetti({
    particleCount: 2,
    angle: 60,
    spread: 55,
    origin: { x: 0 },
    colors: colors,
  });
  confetti({
    particleCount: 2,
    angle: 120,
    spread: 55,
    origin: { x: 1 },
    colors: colors,
  });

  if (Date.now() < Date.now() + 15000) {
    requestAnimationFrame(frame);
  }
}

window.onload = frame();
