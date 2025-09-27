

// Navegación de botones personalizados
function redirectOnClick(selector, url) {
    document.querySelectorAll(selector).forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = url;
        });
    });
}

// Para el botón de registro en register-form.html
redirectOnClick('.btn-registrar', 'index.html');

// Para el botón de cerrar sesión en index.html y home.html
redirectOnClick('.btn-logout', 'index.html');

// Para el botón de iniciar sesión en index.html
redirectOnClick('.btn-registrar', 'home.html');
