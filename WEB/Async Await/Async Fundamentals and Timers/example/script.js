const timerId = setInterval(() => {
    console.log("code is being executed from interval");
});


const timeoutId = setTimeout(() => {
    console.log("code from timeout");
}, 2000);

document.getElementById("stop").addEventListener("click", () => {
    clearInterval(timerId);
    clearTimeout(timeoutId);
});