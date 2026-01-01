const guessInput = document.getElementById("guess");
const rollBtn = document.getElementById("rollBtn");
const retryBtn = document.getElementById("retryBtn");
const message = document.getElementById("message");

rollBtn.addEventListener("click", () => {
    const userGuess = parseInt(guessInput.value);

    if (!userGuess || userGuess < 1 || userGuess > 6) {
        message.textContent = "Please enter a number between 1 and 6!";
        return;
    }

    const diceRoll = Math.floor(Math.random() * 6) + 1;

    if (userGuess === diceRoll) {
        message.textContent = `Correct, You guessed ${userGuess} and dice rolled ${diceRoll}`;
        message.style.color = "green";
    } else {
        message.textContent = `Wrong, You guessed ${userGuess} but dice rolled ${diceRoll}`;
        message.style.color = "red";
    }

    rollBtn.style.display = "none";
    retryBtn.style.display = "inline-block";
    guessInput.disabled = true;
});

retryBtn.addEventListener("click", () => {
    guessInput.value = "";
    guessInput.disabled = false;
    message.textContent = "";
    rollBtn.style.display = "inline-block";
    retryBtn.style.display = "none";
});