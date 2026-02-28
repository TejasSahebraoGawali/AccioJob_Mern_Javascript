document.addEventListener("DOMContentLoaded", () => {
    console.log("this is executed");
    setTimeout(() => {
        console.log("code inside timeout is executed");
    }, 2000);

    setInterval(() => {
        console.log("code from inteval");
        
    }, 1000);
    console.log("Next line is executed");
    
    document.getElementById("btn").addEventListener("click", function() {
        console.log("button clicked");
    })

    
})