// Particle configuration for smooth movement
const particlesConfig = {
    fps_limit: 120, // Cap frame rate for consistent performance
    particles: {
      number: {
        value: 30, // Fewer particles for better performance
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#ffffff"
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.5
      },
      size: {
        value: 3
      },
      move: {
        enable: true,
        speed: 1.5, // Lower speed for smoother movement
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false
      }
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        },
        onclick: {
          enable: true,
          mode: "push"
        }
      },
      modes: {
        repulse: {
          distance: 80, // Responsive distance for repulse
          duration: 1.5 // Smooth repulse effect
        },
        push: {
          particles_nb: 2 // Fewer particles added per click for smoother push
        }
      }
    },
    retina_detect: true // Better visuals on high-res screens
  };
  
  // Manage particle instance
  let particlesContainer = null;
  
  function loadParticles() {
    tsParticles.load('particles-js', particlesConfig).then(container => {
      particlesContainer = container;
    });
  }
  
  // Load particles initially
  loadParticles();
  
  // Toggle particles on/off
  document.getElementById('particles-switch').addEventListener('change', function() {
    if (this.checked) {
      loadParticles();
    } else {
      if (particlesContainer) {
        particlesContainer.destroy();
        particlesContainer = null;
      }
    }
  });
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });