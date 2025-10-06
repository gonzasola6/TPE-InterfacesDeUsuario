// Carruseles por categoría
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.categoria-carrousel').forEach(function(carrousel, idx) {
    const juegos = carrousel.querySelectorAll('.categoria-card');
    let currentCatIndex = 0;
    const leftArrow = carrousel.querySelector('.arrow.left');
    const rightArrow = carrousel.querySelector('.arrow.right');

    function updateCategoriaCarrousel() {
      juegos.forEach((card, index) => {
        card.classList.remove('active', 'prev', 'next');
        card.style.opacity = '0';
        card.style.transform = 'scale(0.8)';
        card.style.zIndex = '0';
      });

      // Calcula los índices visibles
      const prevIdx = (currentCatIndex - 1 + juegos.length) % juegos.length;
      const activeIdx1 = currentCatIndex;
      const activeIdx2 = (currentCatIndex + 1) % juegos.length;
      const nextIdx = (currentCatIndex + 2) % juegos.length;

      // Extremo izquierdo
      juegos[prevIdx].classList.add('prev');
      juegos[prevIdx].style.opacity = '0.5';
      juegos[prevIdx].style.transform = 'scale(0.8)';
      juegos[prevIdx].style.zIndex = '1';

      // Centro principal
      juegos[activeIdx1].classList.add('active');
      juegos[activeIdx1].style.opacity = '1';
      juegos[activeIdx1].style.transform = 'scale(1)';
      juegos[activeIdx1].style.zIndex = '2';

      // Centro secundario
      juegos[activeIdx2].classList.add('active');
      juegos[activeIdx2].style.opacity = '1';
      juegos[activeIdx2].style.transform = 'scale(1)';
      juegos[activeIdx2].style.zIndex = '2';

      // Extremo derecho
      juegos[nextIdx].classList.add('next');
      juegos[nextIdx].style.opacity = '0.5';
      juegos[nextIdx].style.transform = 'scale(0.8)';
      juegos[nextIdx].style.zIndex = '1';
    }

    if (leftArrow) {
      leftArrow.addEventListener('click', function() {
        currentCatIndex = (currentCatIndex - 1 + juegos.length) % juegos.length;
        updateCategoriaCarrousel();
      });
    }
    if (rightArrow) {
      rightArrow.addEventListener('click', function() {
        currentCatIndex = (currentCatIndex + 1) % juegos.length;
        updateCategoriaCarrousel();
      });
    }
    updateCategoriaCarrousel();
  });
});
// Carrusel principal de juegos
document.addEventListener('DOMContentLoaded', function() {
  var carousel = document.getElementById('carousel');
  if (carousel) {
    let currentIndex = 0;
    const cards = carousel.querySelectorAll('.card');

    function updateCarousel() {
      cards.forEach((card, index) => {
        card.classList.remove('active', 'prev', 'next');
        card.style.opacity = '0';
        if (index === currentIndex) {
          card.classList.add('active');
          card.style.opacity = '1';
        } else if (index === (currentIndex - 1 + cards.length) % cards.length) {
          card.classList.add('prev');
          card.style.opacity = '0.5';
        } else if (index === (currentIndex + 1) % cards.length) {
          card.classList.add('next');
          card.style.opacity = '0.5';
        }
      });
    }

    window.moveSlide = function(step) {
      currentIndex = (currentIndex + step + cards.length) % cards.length;
      updateCarousel();
    }

    updateCarousel();
  }
});
// Comentarios: alternar entre destacados y recientes
document.addEventListener('DOMContentLoaded', function() {
  var destacadosTab = document.getElementById('destacados-tab');
  var recientesTab = document.getElementById('recientes-tab');
  var destacados = document.getElementById('comentarios-destacados');
  var recientes = document.getElementById('comentarios-recientes');
  if(destacadosTab && recientesTab && destacados && recientes) {
    destacadosTab.addEventListener('click', function() {
      destacadosTab.classList.add('active');
      recientesTab.classList.remove('active');
      destacados.style.display = '';
      recientes.style.display = 'none';
    });
    recientesTab.addEventListener('click', function() {
      recientesTab.classList.add('active');
      destacadosTab.classList.remove('active');
      recientes.style.display = '';
      destacados.style.display = 'none';
    });
  }

  // Likes locales
  document.querySelectorAll('.btn-like').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var likesSpan = btn.previousElementSibling;
      var likes = parseInt(likesSpan.textContent, 10) || 0;
      likesSpan.textContent = likes + 1;
    });
  });
});
// Función para agregar redirección a botones
// selector = la clase o id del botón, url = a dónde queremos ir
function redirectOnClick(selector, url) {
    document.querySelectorAll(selector).forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = url;
        });
    });
}

// ============================
// FUNCION PARA MANEJAR LOGIN
// ============================
function manejarLogin({
  formSelector,
  btnSelector,
  captchaSelector,
  redireccion = "home.html"
}) {
  const form = document.querySelector(formSelector);
  const btn = document.querySelector(btnSelector);
  const captcha = document.querySelector(captchaSelector);

  if (!form || !btn || !captcha) return;

  function validarCampos() {
    const obligatorios = form.querySelectorAll("[required]");
    let completos = true;
    obligatorios.forEach(campo => {
      if (!campo.value.trim()) completos = false;
    });
    if (!captcha.checked) completos = false;
    btn.disabled = !completos;
  }

  form.addEventListener("input", validarCampos);
  captcha.addEventListener("change", validarCampos);
  validarCampos();

  btn.addEventListener("click", function(e) {
    e.preventDefault();
    if (btn.disabled) return;
    window.location.href = redireccion;
  });
}

// ============================
// FUNCION PARA MANEJAR REGISTRO
// ============================
function manejarRegistro({
  formSelector,
  btnSelector,
  captchaSelector,
  redireccion = "home.html"
}) {
  const form = document.querySelector(formSelector);
  const btn = document.querySelector(btnSelector);
  const captcha = document.querySelector(captchaSelector);

  if (!form || !btn || !captcha) return;

  function validarCampos() {
    const obligatorios = form.querySelectorAll("[required]");
    let completos = true;
    obligatorios.forEach(campo => {
      if (!campo.value.trim()) completos = false;
    });
    if (!captcha.checked) completos = false;
    btn.disabled = !completos;
  }

  form.addEventListener("input", validarCampos);
  captcha.addEventListener("change", validarCampos);
  validarCampos();

  btn.addEventListener("click", function(e) {
    e.preventDefault();
    if (btn.disabled) return;

    const overlay = form.querySelector(".like-overlay");
    if (overlay) {
        overlay.classList.add("active"); // activa overlay y pulgar
    }

    // Espera 3 segundos antes de redirigir
    setTimeout(() => {
        window.location.href = redireccion;
    }, 3000);
});

}

// ============================
// INICIALIZACIÓN AL CARGAR LA PÁGINA
// ============================
document.addEventListener("DOMContentLoaded", function() {

  // LOGIN
  if (document.querySelector(".form-registro-login")) {
    manejarLogin({
      formSelector: ".form-registro-login",
      btnSelector: ".btn-login",
      captchaSelector: "#captcha-login",
      redireccion: "home.html"
    });
  }

  // REGISTRO
  if (document.querySelector(".form-registro")) {
    manejarRegistro({
      formSelector: ".form-registro",
      btnSelector: ".btn-registrar",
      captchaSelector: "#captcha",
      redireccion: "home.html"
    });
  }

  // Redirigir botones de redes sociales a home.html
  redirectOnClick('.btn-facebook', 'home.html');
  redirectOnClick('.btn-google', 'home.html');
  
  redirectOnClick('.btn-facebook-login', 'home.html');
  redirectOnClick('.btn-google-login', 'home.html');
});


// ============================
// ANAIMACION DE CARGA
// ============================
document.addEventListener("DOMContentLoaded", function() {
  const loader = document.getElementById("loader-overlay");
  const percentageEl = document.getElementById("loader-percentage");

  if(!loader || !percentageEl) return;

  loader.classList.add("active");

  let percentage = 0;
  const intervalTime = 5000 / 100; // 5 segundos para llegar a 100%

  const interval = setInterval(() => {
    percentage++;
    percentageEl.textContent = percentage + "%";

    if (percentage >= 100) {
      clearInterval(interval);
      loader.classList.remove("active");
    }
  }, intervalTime);
});

// ====== Carousel simple para home ======
// Si existe un carrusel en la página, inicializarlo
document.addEventListener('DOMContentLoaded', function() {
  const carouselEl = document.querySelector('.carousel');
  if (!carouselEl) return;

  let currentIndex = 0;
  const cards = carouselEl.querySelectorAll('.card');

  function updateCarousel() {
    cards.forEach((card, index) => {
      card.classList.remove('active', 'prev', 'next');
      card.style.opacity = '0';
      if (index === currentIndex) {
        card.classList.add('active');
        card.style.opacity = '1';
      } else if (index === (currentIndex - 1 + cards.length) % cards.length) {
        card.classList.add('prev');
        card.style.opacity = '0.5';
      } else if (index === (currentIndex + 1) % cards.length) {
        card.classList.add('next');
        card.style.opacity = '0.5';
      }
    });
  }

  function moveSlide(step) {
    currentIndex = (currentIndex + step + cards.length) % cards.length;
    updateCarousel();
  }

  // Exponer globalmente para que los botones con onclick="moveSlide(...)" funcionen
  window.moveSlide = moveSlide;

  // Inicializa el estado
  updateCarousel();

  // También enlazar flechas si prefieres listeners en lugar de onclick inline
  const leftArrow = document.querySelector('.carousel-container .arrow.left');
  const rightArrow = document.querySelector('.carousel-container .arrow.right');
  if (leftArrow) leftArrow.addEventListener('click', () => moveSlide(-1));
  if (rightArrow) rightArrow.addEventListener('click', () => moveSlide(1));
});

