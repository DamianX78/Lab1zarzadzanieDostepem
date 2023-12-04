/* lista elementów z którymi będziemy pracować przy pomocy js */
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

/* Fragment który reaguje na kliknięcie myszką w przycisk logowania */
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

/* Fragment kodu który sprawdza poprawność danych logowania. Obecnie loguje na puste okienka. Po wpisaniu danych wyśiwetla błąd */
    if (username === "" && password === "") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        /* alert("Oj coś nie poszło. Sprawdz dane logowania."); */
        loginErrorMsg.style.opacity = 1;
        
    }
})