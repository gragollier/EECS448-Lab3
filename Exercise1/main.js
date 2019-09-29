function validatePassword() {
    const password1 = document.getElementById('password1').value;
    const password2 = document.getElementById('password2').value;
    if (password1 !== password2) {
        alert("Entered passwords don't match!");
    } else if (password1.length < 8 || password2.length < 8) {
        alert("Passwords must be at least 8 characters!");
    } else if (password1 === password2) {
        alert("Passwords Match!");
    }
}