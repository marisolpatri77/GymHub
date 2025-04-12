// Cambio de tema (oscuro/claro)
document.addEventListener("DOMContentLoaded", () => {
  // Verificar si hay una preferencia guardada
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme) {
    document.body.className = savedTheme
  } else {
    // Verificar preferencia del sistema
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    document.body.className = prefersDark ? "dark-mode" : "light-mode"
  }

  // Botón de cambio de tema
  const themeToggle = document.getElementById("theme-toggle")
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      if (document.body.classList.contains("dark-mode")) {
        document.body.classList.remove("dark-mode")
        document.body.classList.add("light-mode")
        localStorage.setItem("theme", "light-mode")
        themeToggle.setAttribute("aria-pressed", "false");
      } else {
        document.body.classList.remove("light-mode")
        document.body.classList.add("dark-mode")
        localStorage.setItem("theme", "dark-mode")
        themeToggle.setAttribute("aria-pressed", "true");
      }
    })
  }

  // Header transparente que cambia al hacer scroll
  const header = document.querySelector(".header")
if (header) {
  // Función para actualizar el header según el scroll
  function updateHeader() {
    if (window.scrollY > 100) {
      // En pantallas móviles, siempre mantener el fondo oscuro
      if (window.innerWidth <= 768) {
        header.style.backgroundColor = "rgba(0, 0, 0, 0.9)"
      } else {
        header.style.backgroundColor = document.body.classList.contains("dark-mode")
          ? "rgba(0, 0, 0, 0.9)"
          : "rgba(0, 0, 0, 0.8)" 
      }

      // Actualizar color del texto según el modo
      header.style.color = "#FFFFFF" 
    } else {
      // En pantallas móviles, siempre mantener el fondo oscuro
      if (window.innerWidth <= 768) {
        header.style.backgroundColor = "rgba(0, 0, 0, 0.9)"
      } else {
        header.style.backgroundColor = "transparent"
      }
      header.style.color = "#FFFFFF" 
    }
  }

  // Ejecutar al cargar la página
  updateHeader()

  // Ejecutar al hacer scroll
  window.addEventListener("scroll", updateHeader)

  // Ejecutar también cuando cambia el tamaño de la ventana
  window.addEventListener("resize", updateHeader)
}

  // Manejo de submenús en móvil
  const navToggle = document.getElementById("nav-toggle");
  const hasSubmenu = document.querySelectorAll(".has-submenu");
  if (window.innerWidth <= 768) {
    // Ocultar/mostrar el botón de tema cuando el menú está abierto/cerrado
    if (navToggle && themeToggle) {
      navToggle.addEventListener("change", () => {
        if (navToggle.checked) {
          themeToggle.style.display = "none"; 
        } else {
          themeToggle.style.display = "flex"; 
        }
      });
    }

    hasSubmenu.forEach((item) => {
      const link = item.querySelector("a");
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const submenu = this.nextElementSibling;
        if (submenu.style.display === "block") {
          submenu.style.display = "none";
        } else {
          submenu.style.display = "block";
        }
      });
    });
  }

  // Carrusel de testimonios con autoplay
  const testimonialTrack = document.querySelector(".testimonial-track")
  if (testimonialTrack) {
    // Añadir clase para autoplay
    testimonialTrack.classList.add("autoplay")

    // Actualizar dots cuando cambia el slide
    const testimonialDots = document.querySelectorAll(".testimonial-dot")
    if (testimonialDots.length > 0) {
      // Función para actualizar los dots según la posición actual
      function updateDots() {
        const transform = getComputedStyle(testimonialTrack).transform
        const matrix = new DOMMatrix(transform)
        const translateX = matrix.m41

        // Calcular el índice del slide actual basado en la posición
        let slideWidth = testimonialTrack.offsetWidth / 3
        if (window.innerWidth <= 992 && window.innerWidth > 768) {
          slideWidth = testimonialTrack.offsetWidth / 2
        } else if (window.innerWidth <= 768) {
          slideWidth = testimonialTrack.offsetWidth
        }

        let currentIndex = Math.round(Math.abs(translateX) / slideWidth)
        if (currentIndex >= testimonialDots.length) currentIndex = 0

        // Actualizar dots
        testimonialDots.forEach((dot, index) => {
          if (index === currentIndex) {
            dot.classList.add("active")
          } else {
            dot.classList.remove("active")
          }
        })
      }

      // Actualizar dots cuando cambia la animación
      testimonialTrack.addEventListener("animationiteration", updateDots)

      // Permitir clic en los dots para cambiar slide
      testimonialDots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
          // Detener la animación
          testimonialTrack.style.animation = "none"

          // Calcular el ancho de cada slide según el viewport
          let slideWidth = 33.333
          if (window.innerWidth <= 992 && window.innerWidth > 768) {
            slideWidth = 50
          } else if (window.innerWidth <= 768) {
            slideWidth = 100
          }

          // Mover el carrusel
          testimonialTrack.style.transform = `translateX(-${index * slideWidth}%)`

          // Actualizar dots activos
          testimonialDots.forEach((d) => d.classList.remove("active"))
          dot.classList.add("active")

          // Reiniciar la animación después de un breve retraso
          setTimeout(() => {
            testimonialTrack.style.animation = ""
            testimonialTrack.classList.add("autoplay")
          }, 5000)
        })
      })
    }
  }

  // Animación de contador
  const stats = document.querySelectorAll(".stat-number")

  // Función para verificar si un elemento está en el viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect()
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }

  // Función para animar los contadores cuando están en el viewport
  function animateCounters() {
    stats.forEach((stat) => {
      if (isInViewport(stat) && !stat.classList.contains("counted")) {
        stat.classList.add("counted")

        const target = Number.parseInt(stat.textContent.replace(/[^\d]/g, ""))
        let count = 0
        const duration = 2000 // 2 segundos
        const interval = Math.floor(duration / target)

        const counter = setInterval(() => {
          count += 1
          stat.textContent = count + "+"

          if (count >= target) {
            clearInterval(counter)
            stat.textContent = target + "+"
          }
        }, interval)
      }
    })
  }

  // Ejecutar al cargar y al hacer scroll
  if (stats.length > 0) {
    animateCounters()
    window.addEventListener("scroll", animateCounters)
  }


})
