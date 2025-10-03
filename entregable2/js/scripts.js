// Función para agregar redirección a botones
// selector = la clase o id del botón, url = a dónde queremos ir
function redirectOnClick(selector, url) {
    // Tomamos todos los botones que coincidan con el selector
    document.querySelectorAll(selector).forEach(function(btn) {
        // Agregamos el evento click
        btn.addEventListener('click', function(e) {
            e.preventDefault(); // Evita que haga su comportamiento normal (como enviar un formulario)
            window.location.href = url; // Redirige a la URL indicada
        });
    });
}
// ============================
// FUNCION PARA AGREGAR REDIRECCIÓN A BOTONES
// selector = clase o id del botón, url = destino
// ============================
function redirectOnClick(selector, url) {
    document.querySelectorAll(selector).forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault(); // Evita comportamiento por defecto
            window.location.href = url; // Redirige a la URL indicada
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
  loaderSelector,
  redireccion = "home.html"
}) {
  const form = document.querySelector(formSelector);
  const btn = document.querySelector(btnSelector);
  const captcha = document.querySelector(captchaSelector);
  const loader = document.querySelector(loaderSelector);

  if (!form || !btn || !captcha || !loader) return;

  // Función para validar campos obligatorios
  function validarCampos() {
    const obligatorios = form.querySelectorAll("[required]");
    let completos = true;
    obligatorios.forEach(campo => {
      if (!campo.value.trim()) completos = false;
    });
    if (!captcha.checked) completos = false;
    btn.disabled = !completos;
  }

  // Validamos cada vez que hay cambios en los campos
  form.addEventListener("input", validarCampos);
  captcha.addEventListener("change", validarCampos);
  validarCampos();

  // Evento click para iniciar sesión
  btn.addEventListener("click", function(e) {
    e.preventDefault();
    if (btn.disabled) return;

    loader.classList.add("active");
    const percentageEl = loader.querySelector("#loader-percentage");
    let percentage = 0;
    const intervalTime = 5000 / 100;

    const interval = setInterval(() => {
      percentage++;
      percentageEl.textContent = percentage + "%";

      if (percentage >= 100) {
        clearInterval(interval);
        window.location.href = redireccion;
      }
    }, intervalTime);
  });
}

// ============================
// FUNCION PARA MANEJAR REGISTRO (opcional si quieres modular igual que login)
// ============================
function manejarRegistro({
  formSelector,
  btnSelector,
  captchaSelector,
  loaderSelector,
  redireccion = "home.html"
}) {
  const form = document.querySelector(formSelector);
  const btn = document.querySelector(btnSelector);
  const captcha = document.querySelector(captchaSelector);
  const loader = document.querySelector(loaderSelector);

  if (!form || !btn || !captcha || !loader) return;

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

    loader.classList.add("active");
    const percentageEl = loader.querySelector("#loader-percentage");
    let percentage = 0;
    const intervalTime = 5000 / 100;

    const interval = setInterval(() => {
      percentage++;
      percentageEl.textContent = percentage + "%";

      if (percentage >= 100) {
        clearInterval(interval);
        window.location.href = redireccion;
      }
    }, intervalTime);
  });
}

// ============================
// INICIALIZACIÓN AL CARGAR LA PÁGINA
// ============================
document.addEventListener("DOMContentLoaded", function() {

  // LOGIN
  if(document.querySelector(".form-registro-login")) {
    manejarLogin({
      formSelector: ".form-registro-login",
      btnSelector: ".btn-login",
      captchaSelector: "#captcha-login",
      loaderSelector: "#loader-overlay",
      redireccion: "home.html"
    });
  }

  // REGISTRO (si se encuentra el formulario)
  if(document.querySelector(".form-registro")) {
    manejarRegistro({
      formSelector: ".form-registro",
      btnSelector: ".btn-registrar",
      captchaSelector: "#captcha",
      loaderSelector: "#loader-overlay",
      redireccion: "home.html"
    });
  }

  // Redirigir botones de redes sociales a home.html
  redirectOnClick('.btn-facebook', 'home.html');
  redirectOnClick('.btn-google', 'home.html');
});
