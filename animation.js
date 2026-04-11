// ==================== TYPING EFFECT ====================
const typed = new Typed(".typing", {
  strings: [
    "Desenvolvedor Web Full Stack",
    "Especialista em E-Commerce",
    "Automação & Integrações",
    "Especialista em Desenvolvimento",
    "Criador de Soluções de Impacto",
  ],
  typeSpeed: 70,
  backSpeed: 50,
  backDelay: 2000,
  startDelay: 500,
  loop: true,
});

// ==================== SCROLL REVEAL ====================
ScrollReveal().reveal("#hero", {
  delay: 200,
  origin: "top",
  distance: "50px",
  duration: 800,
  reset: false,
});

ScrollReveal().reveal(".project-card-large", {
  interval: 150,
  origin: "bottom",
  distance: "40px",
  duration: 800,
});

ScrollReveal().reveal(".skill-category", {
  interval: 100,
  origin: "bottom",
  distance: "30px",
  duration: 600,
});

ScrollReveal().reveal(".expertise-item", {
  interval: 100,
  origin: "left",
  distance: "30px",
  duration: 600,
});

ScrollReveal().reveal("section h2", {
  origin: "left",
  distance: "50px",
  duration: 800,
});

ScrollReveal().reveal(".stat-card", {
  interval: 100,
  origin: "top",
  distance: "30px",
  duration: 600,
});

// ==================== MENU HAMBURGER ====================
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Fechar menu ao clicar em um link
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

// ==================== PARTICULAS - tsParticles ====================
tsParticles.load("tsparticles", {
  fpsLimit: 60,
  particles: {
    number: {
      value: 50,
      density: { enable: true, area: 800 },
    },
    color: { value: "#62d0ff" },
    shape: { type: "circle" },
    opacity: {
      value: 0.3,
      random: true,
    },
    size: {
      value: 2,
      random: true,
    },
    move: {
      enable: true,
      speed: 0.8,
      direction: "none",
      outModes: "bounce",
    },
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "repulse" },
      onClick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      repulse: { distance: 100 },
      push: { quantity: 4 },
    },
  },
  detectRetina: true,
});
