function esconder() {
    let esconder = document.getElementById("senha");
    if (esconder.type === "password") {
        esconder.type = "text";
    }
    else {
        esconder.type = "password";
    }
}