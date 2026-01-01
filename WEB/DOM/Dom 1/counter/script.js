let count = 0;

const display = document.querySelector(".result");
const addBtn = document.querySelector(".add");
const minusBtn = document.querySelector(".minus");
const resetBtn = document.querySelector(".reset");



addBtn.addEventListener("click", function () {
    count++;
    display.innerText = count;
})

minusBtn.addEventListener("click", function () {
    count--;
    display.innerText = count;
})

resetBtn.addEventListener("click", function () {
    count = 0;
    display.innerText = count;
})
