
// Navegación de botones personalizados
function redirectOnClick(selector, url) {
    document.querySelectorAll(selector).forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = url;
        });
    });
}


document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector(".form-registro");
  const btn = document.querySelector(".btn-registrar");
  const captcha = document.getElementById("captcha");
  const loader = document.getElementById("loader-overlay");

  // ✅ Validar campos obligatorios
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

  // 🚀 Evento de envío con animación y porcentaje
  form.addEventListener("submit", function(e) {
    e.preventDefault(); // Evita refrescar

    // Mostrar loader
    loader.classList.add("active");

    const percentageEl = document.getElementById("loader-percentage");
    let percentage = 0;

    // Calculamos intervalos para 5 segundos hasta 100%
    const intervalTime = 5000 / 100; // 50ms por paso

    const interval = setInterval(() => {
      percentage++;
      percentageEl.textContent = percentage + "%";

      if (percentage >= 100) {
        clearInterval(interval);
        window.location.href = "home.html"; // Redirige al finalizar
      }
    }, intervalTime);
  });
});



// Para el botón de registro en register-form.html
//redirectOnClick('.btn-registrar', 'index.html');

// Para el botón de cerrar sesión en index.html y home.html
//redirectOnClick('.btn-logout', 'index.html');

// Para el botón de iniciar sesión en index.html
//redirectOnClick('.btn-registrar', 'home.html');


