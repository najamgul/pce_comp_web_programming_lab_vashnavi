document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signupForm");
    form.addEventListener("submit", function (event) {
        const password = document.getElementById("password").value;
        const confirm_password = document.getElementById("confirm_password").value;

        if (password !== confirm_password) {
            alert("Passwords do not match");
            event.preventDefault();
        }
    });
});
