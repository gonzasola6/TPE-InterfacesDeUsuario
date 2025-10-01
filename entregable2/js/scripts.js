
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

  function validarCampos() {
    // Selecciona todos los campos obligatorios
    const obligatorios = form.querySelectorAll("[required]");
    let completos = true;
    obligatorios.forEach(campo => {
      if (!campo.value.trim()) completos = false;
    });
    // Verifica el captcha
    if (!captcha.checked) completos = false;
    // Habilita o deshabilita el botón
    btn.disabled = !completos;
  }

  // Escucha cambios en los campos y el captcha
  form.addEventListener("input", validarCampos);
  captcha.addEventListener("change", validarCampos);

  // Deshabilita el botón al cargar la página
  validarCampos();
});


// Para el botón de registro en register-form.html
redirectOnClick('.btn-registrar', 'index.html');

// Para el botón de cerrar sesión en index.html y home.html
redirectOnClick('.btn-logout', 'index.html');

// Para el botón de iniciar sesión en index.html
redirectOnClick('.btn-registrar', 'home.html');


