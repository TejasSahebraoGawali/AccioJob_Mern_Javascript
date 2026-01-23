document.addEventListener("DOMContentLoaded", function (event) {

    const codeInputs = document.querySelectorAll(".code-container .code");

    codeInputs[0].focus();

    for (let input of codeInputs) {
        input.addEventListener("keyup", function (event) {
            let target = event.target;
            if (target.value) {
                target.nextElementSibling?.focus();
            } else if (!target.value && event.key === "Backspace") {
                target.previousElementSibling?.focus();
            }
        })
    }


})