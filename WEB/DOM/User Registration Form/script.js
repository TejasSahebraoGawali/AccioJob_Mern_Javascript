let form = document.querySelector(".container");
let submit = document.querySelector("button[type='submit']");

submit.disabled = true;

form.addEventListener("input", function () {
    submit.disabled = !form.checkValidity();
});

form.addEventListener("submit", function (event) {
    event.preventDefault();
});