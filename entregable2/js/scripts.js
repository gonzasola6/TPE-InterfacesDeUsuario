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
    window.location.href = redireccion;
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

