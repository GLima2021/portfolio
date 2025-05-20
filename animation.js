// Typing Effect
const typed = new Typed(".typing", {
    strings: ["Developer", "Web Designer", "Professor de Inglês"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
  });
  
  // Scroll Reveal
  ScrollReveal().reveal("#hero", {
    delay: 200,
    origin: "top",
    distance: "50px",
    duration: 800,
    reset: false
  });
  
  ScrollReveal().reveal(".project-card", {
    interval: 200,
    origin: "bottom",
    distance: "40px",
    duration: 800
  });
  
  ScrollReveal().reveal(".stack-icons img", {
    interval: 100,
    scale: 0.85,
    duration: 600
  });
  
  ScrollReveal().reveal("section h2, footer", {
    origin: "left",
    distance: "50px",
    duration: 800
  });
  
  // Tema Claro/Escuro
  const themeToggle = document.getElementById("theme-toggle");
  
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
  });
  
  // Menu Hambúrguer
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector("nav");
  
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
  
  // Partículas - tsParticles
  tsParticles.load("tsparticles", {
    fpsLimit: 60,
    particles: {
      number: {
        value: 40,
        density: { enable: true, area: 800 }
      },
      color: { value: "#62d0ff" },
      shape: { type: "circle" },
      opacity: {
        value: 0.5,
        random: true
      },
      size: {
        value: 3,
        random: true
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        outModes: "bounce"
      }
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        repulse: { distance: 80 },
        push: { quantity: 4 }
      }
    },
    detectRetina: true
  });
  // Pop-up de descrição das stacks
const techPopup = document.getElementById("tech-popup");
const popupTitle = document.getElementById("popup-title");
const popupDesc = document.getElementById("popup-description");
const closePopup = document.querySelector(".close-popup");

const descriptions = {
  html: {
    title: "HTML5",
    text: "Uso HTML para estruturar sites modernos com semântica e responsividade. Experiência em diversos projetos web e portfólios."
  },
  css: {
    title: "CSS3",
    text: "Com CSS crio layouts bonitos, responsivos e animados. Faço uso de Flexbox, Grid e animações modernas."
  },
  javascript: {
    title: "JavaScript",
    text: "JavaScript é meu principal motor de interatividade. Crio animações, efeitos, lógica de apps e muito mais."
  },
  flutter: {
    title: "Flutter",
    text: "Utilizo Flutter para desenvolver apps multiplataforma como o Pelada VIP. Trabalho com estado, navegação e Firebase."
  },
  php: {
    title: "PHP",
    text: "Uso PHP para criar APIs e processar dados em servidores. Trabalhei em dashboards e sistemas simples com MySQL."
  },
  mysql: {
    title: "MySQL",
    text: "Banco de dados relacional usado em meus projetos para armazenar cliques, leads, usuários e mais."
  },
  sql: {
    title: "SQL (SQLite)",
    text: "Tenho noções de SQL para consultas e manipulação de dados em projetos pequenos e mobile com Flutter."
  },
  github: {
    title: "GitHub",
    text: "Uso GitHub para versionar códigos, colaborar em projetos e hospedar repositórios com meus trabalhos."
  }
};

document.querySelectorAll(".stack-icons img").forEach(img => {
  img.addEventListener("click", () => {
    const tech = img.dataset.tech;
    popupTitle.textContent = descriptions[tech].title;
    popupDesc.textContent = descriptions[tech].text;
    techPopup.classList.add("show");
  });
});

closePopup.addEventListener("click", () => {
  techPopup.classList.remove("show");
});

// Fecha ao clicar fora do popup
window.addEventListener("click", (e) => {
  if (e.target === techPopup) {
    techPopup.classList.remove("show");
  }
});

  