var swiper = new Swiper(".mySwiper", {
  spaceBetween: 35,
  centeredSlides: true,
  fade: "true",
  grabCursor: "true",
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
const form = document.getElementById("subscription-form");
const emailInput = document.getElementById("email-input");
const errorMessage = document.getElementById("error-message");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = emailInput.value.trim();

  if (email === "") {
    displayError("Please enter an email address.");
    return;
  }

  if (!isValidEmail(email)) {
    displayError("Please enter a valid email address.");
    return;
  }

  // Aquí puedes agregar la lógica para enviar el formulario si es válido
  // form.submit();
  console.log("Valid form. E-mail:", email);
});

function isValidEmail(email) {
  // Expresión regular para validar dirección de correo electrónico
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function displayError(message) {
  errorMessage.textContent = message;
  errorMessage.style.display = "block";
}
