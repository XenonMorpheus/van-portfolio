document.addEventListener("DOMContentLoaded", () => {
  // Import tsParticles library (if not already included in HTML)
  // This assumes you are using a module bundler or have included tsParticles via a <script> tag
  // If using a module bundler:
  // import { tsParticles } from "tsparticles";

  // If including via <script> tag, tsParticles is already globally available

  // Calculate RGB values from CSS variables
  function getRGBFromVar(varName) {
    const color = getComputedStyle(document.documentElement).getPropertyValue(varName)
    if (color.includes("rgb")) {
      const match = color.match(/\d+/g)
      return match ? match.map(Number) : [255, 255, 255]
    }
    return [255, 255, 255] // Default to white if parsing fails
  }

  // Get theme-appropriate particle color
  function getParticleColor() {
    if (document.body.classList.contains("dark-mode")) {
      return "#ffffff"
    } else {
      return "#000000"
    }
  }

  // Initialize particles
  function initParticles() {
    tsParticles.load("particles-container", {
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: getParticleColor(),
        },
        links: {
          color: getParticleColor(),
          distance: 150,
          enable: true,
          opacity: 0.2,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 50,
        },
        opacity: {
          value: 0.3,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    })
  }

  // Initialize particles
  initParticles()

  // Update particle colors when theme changes
  const themeToggle = document.querySelector(".theme-toggle")
  const themeToggleMobile = document.querySelector(".theme-toggle-mobile")

  function updateParticleColors() {
    const container = tsParticles.domItem(0)
    if (container) {
      const color = getParticleColor()
      container.options.particles.color.value = color
      container.options.particles.links.color = color
      container.refresh()
    }
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", updateParticleColors)
  }

  if (themeToggleMobile) {
    themeToggleMobile.addEventListener("click", updateParticleColors)
  }
})

