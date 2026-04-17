
function validasiLogin() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (!email.includes("@")) {
        alert("Email tidak valid! harus terdapat simbol @");
        return false;
    }

    if (password === "") {
        alert("Password wajib diisi!");
        return false;
    }

    return true;
}