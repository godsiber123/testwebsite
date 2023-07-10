window.addEventListener("DOMContentLoaded", (event) => {
    const logregBox = document.getElementById('logreg-box');
    const loginLink = document.getElementById('login-link');
    const registerLink = document.getElementById('register-link');

    registerLink.addEventListener('click', () => {
        logregBox.classList.add('active');
    });

    loginLink.addEventListener('click', () => {
        logregBox.classList.remove('active');
    });
});