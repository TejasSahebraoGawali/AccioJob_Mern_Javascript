const elem = document.querySelector(".circle");

elem.addEventListener("mousemove", move);

function move(e) {
    const { clientX, clientY } = e;

    elem.style.top = `${clientY - 20}px`;
    elem.style.left = `${clientX - 20}px`;
}