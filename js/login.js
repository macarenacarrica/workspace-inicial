document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const alertSuccess = document.getElementById("alert-success");
    const alertDanger = document.getElementById("alert-danger");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

        // Ocultar alertas
        alertSuccess.classList.remove("show");
        alertDanger.classList.remove("show");

        if (username.value.trim() === "" || password.value.trim() === "") {
            // Mostrar alerta de error
            alertDanger.classList.add("show");
        } else {
            // Mostrar alerta de éxito
            alertSuccess.classList.add("show");
        }
    });
});

