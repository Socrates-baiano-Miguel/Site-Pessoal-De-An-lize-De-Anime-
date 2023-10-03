const password = "suasenha"; // Substitua com a senha desejada

function checkPassword() {
    const passwordInput = document.getElementById("passwordInput");
    const enteredPassword = passwordInput.value;

    if (enteredPassword === password) {
        window.location.href = "home.html"; // Substitua com a página desejada
    } else {
        alert("MAS É BURRO MESMO EIN!!!!!");
        passwordInput.value = "";
    }
}

