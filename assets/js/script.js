inputPassword = document.getElementById("fpassword")
btnMostrarSenha = document.getElementById("btn-mostrar-senha")

btnMostrarSenha.addEventListener("click", () => {
    if (inputPassword.type === "password") {
        inputPassword.setAttribute("type", "text")
        btnMostrarSenha.classList.replace("bi-eye-fill", "bi-eye-slash-fill")
    } else if (inputPassword.type === "text") {
        inputPassword.setAttribute("type", "password")
        btnMostrarSenha.classList.replace("bi-eye-slash-fill", "bi-eye-fill")
    }
})
