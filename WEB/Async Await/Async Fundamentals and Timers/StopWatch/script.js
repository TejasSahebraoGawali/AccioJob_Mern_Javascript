let timer = null;

const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");

let seconds = 0;
let minutes = 0;
let hours = 0;

const secondsElement = document.getElementById("seconds");
const minutesElement = document.getElementById("minutes");
const hoursElement = document.getElementById("hours");

function startTimer() {

    if (timer !== null) return;
    
    timer = setInterval(() => {
        seconds++;

        if (seconds > 59) {
            minutes++;
            seconds = 0;
        }
        if (minutes > 59) {
            hours++;
            minutes = 0;
        }
        updateDigits();
    }, 1000);
}


function updateDigits() {
    secondsElement.textContent = seconds < 10 ? `0${seconds}` : seconds;
    minutesElement.textContent = minutes < 10 ? `0${minutes}` : minutes;
    hoursElement.textContent = hours < 10 ? `0${hours}` : hours;
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);

function stopTimer() {
    clearInterval(timer);
    timer = null;
}