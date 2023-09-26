document.addEventListener("click", (event) => {
    const el = event.target;

    if (el.tagName.toLowerCase() === "i" && el.id.toLowerCase() === "btn-mostrar-senha") {
        inputPassword = document.getElementById("fpassword")
        btnMostrarSenha = document.getElementById("btn-mostrar-senha")

        if (inputPassword.type === "password") {
            inputPassword.setAttribute("type", "text")
            btnMostrarSenha.classList.replace("bi-eye-fill", "bi-eye-slash-fill")
        } else if (inputPassword.type === "text") {
            inputPassword.setAttribute("type", "password")
            btnMostrarSenha.classList.replace("bi-eye-slash-fill", "bi-eye-fill")
        }
    } 
    else if (el.tagName.toLowerCase() === "button" && el.parentElement.id.toLowerCase() === "alerta") {
        alertaCaixa = document.getElementById("alerta");
        alertaCaixa.classList.add("fechar");
        document.body.classList.remove("deactive");
    }
})

// verificarPagina = setInterval(() => {
//     alertaCaixa = document.getElementById("alerta");

//     if (!((!document.body.classList.contains("deactivate")) && alertaCaixa.classList.contains("fechar"))) {
//         window.location.reload(false);
//     }
// }, 100);
