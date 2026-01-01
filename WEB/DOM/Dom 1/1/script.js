// --- Elements ---
let startBtn = document.querySelector("#start");
let stopBtn = document.querySelector("#stop");

// --- Handlers ---
const handleClick = (event) => {
    console.log("Start clicked at:", event.clientX, event.clientY);
}

const mouseHover = (event) => {
    console.log("Mouse position:", event.clientX, event.clientY);
}

// --- Events ---
startBtn.addEventListener("click", handleClick);
document.addEventListener("mouseover", mouseHover);

stopBtn.addEventListener("click", () => {
    document.removeEventListener("mouseover", mouseHover);
    console.log("Mouseover event stopped");
});
