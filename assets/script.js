const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const signInLink = document.getElementById("signInLink");
const signInForm = document.getElementById("signInForm");

signInLink.addEventListener("click", () => {
    if (signInForm.style.display === "none" || signInForm.style.display === "") {
        signInForm.style.display = "block";
    } else {
        signInForm.style.display = "none";
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateInputs();
});

function validateInputs() {
    const usernameVal = username.value.trim();
    const passwordVal = password.value.trim();

    if (usernameVal === "") {
        setError(username, "Username is required");
    } else {
        setSuccess(username);
    }
    if (passwordVal === "") {
        setError(password, "Password is required");
    } else if (passwordVal.length < 6) {
        setError(password, "Password must be at least 6 characters");
    } else {
        setSuccess(password);
    }
}

function setError(element, message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector(".error");

    errorElement.innerText = message;
    inputGroup.classList.add("error");
    inputGroup.classList.remove("success");
}

function setSuccess(element) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector(".error");

    errorElement.innerText = "";
    inputGroup.classList.add("success");
    inputGroup.classList.remove("error");
}