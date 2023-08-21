const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = form.username.value;
    const password = form.password.value;

    const authenticated = authentication(username, password);

    if (authenticated) {
        alert("Correct credentials");
        window.location.href = "logout.html"; // Redirect after successful login
    } else {
        alert("Wrong credentials");
    }
});

// Function for checking username and password
function authentication(username, password) {
    if (username === "Ankur" && password === "Ankur@12") {
        return true;
    } else {
        return false;
    }
}
