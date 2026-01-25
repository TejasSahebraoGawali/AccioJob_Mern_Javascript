// const value = document.getElementById("newTodoInput");
// const list = document.getElementById("todoList");



// function addList() {
//     list.innerText = "<li>" + value + "</li>";
// }


// document.getElementById("addTodoBtn").addEventListener("click", addList);



const input = document.getElementById("newTodoInput");
const list = document.getElementById("todoList");

function addList() {
    const li = document.createElement("li"); // create <li>
    li.innerText = input.value;              // set text
    list.appendChild(li);                    // add to <ol>
    input.value = "";                        // clear input
}

document
  .getElementById("addTodoBtn")
  .addEventListener("click", addList);
