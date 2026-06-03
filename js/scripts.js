// ── PARTICLE BACKGROUND ──
const canvas = document.getElementById('bg-canvas');
const ctx    = canvas.getContext('2d');

let W, H, particles;
const PARTICLE_COUNT = 80;
const MAX_DIST       = 140;
const CYAN           = '0, 229, 255';

function resize() {
  W = canvas.width  = window.innerWidth;
  H = canvas.height = window.innerHeight;
}

function randomParticle() {
  return {
    x:  Math.random() * W,
    y:  Math.random() * H,
    vx: (Math.random() - 0.5) * 0.35,
    vy: (Math.random() - 0.5) * 0.35,
    r:  Math.random() * 1.5 + 0.5,
  };
}

function initParticles() {
  particles = Array.from({ length: PARTICLE_COUNT }, randomParticle);
}

function drawParticles() {
  ctx.clearRect(0, 0, W, H);

  // Draw connections
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx   = particles[i].x - particles[j].x;
      const dy   = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < MAX_DIST) {
        const alpha = (1 - dist / MAX_DIST) * 0.18;
        ctx.beginPath();
        ctx.strokeStyle = `rgba(${CYAN}, ${alpha})`;
        ctx.lineWidth   = 0.6;
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }

  // Draw nodes
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${CYAN}, 0.5)`;
    ctx.fill();
  });
}

function updateParticles() {
  particles.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < 0 || p.x > W) p.vx *= -1;
    if (p.y < 0 || p.y > H) p.vy *= -1;
  });
}

function loop() {
  updateParticles();
  drawParticles();
  requestAnimationFrame(loop);
}

window.addEventListener('resize', () => { resize(); initParticles(); });
resize();
initParticles();
loop();



// ── ACTIVE NAV ON SCROLL ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const navObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(l => l.classList.remove('active'));
      const a = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
      if (a) a.classList.add('active');
    }
  });
}, { rootMargin: '-20% 0px -70% 0px' });

sections.forEach(s => navObserver.observe(s));


// ── SCROLL REVEAL ──
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
