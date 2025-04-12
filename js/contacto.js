// JavaScript para la página de contacto
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm")
  const submitBtn = document.querySelector(".submit-btn")
  const confirmationModal = document.getElementById("confirmationModal")
  const modalClose = document.getElementById("modalClose")

  // Manejar envío del formulario
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Validar formulario
    if (contactForm.checkValidity()) {
      // Mostrar spinner
      submitBtn.classList.add("loading")

      // Simular envío (2 segundos)
      setTimeout(() => {
        // Ocultar spinner
        submitBtn.classList.remove("loading")

        // Mostrar modal
        confirmationModal.classList.add("active")

        // Resetear formulario
        contactForm.reset()
      }, 2000)
    } else {
      // Forzar validación nativa del navegador
      contactForm.reportValidity()
    }
  })

  // Cerrar modal al hacer clic en el botón
  modalClose.addEventListener("click", () => {
    confirmationModal.classList.remove("active")
  })

  // Cerrar modal al hacer clic fuera
  confirmationModal.addEventListener("click", (e) => {
    if (e.target === confirmationModal) {
      confirmationModal.classList.remove("active")
    }
  })
})
