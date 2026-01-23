const addBtn = document.querySelector("#add-btn");
const textarea = document.querySelector("#addtask");
const taskList = document.querySelector("#taskList");
const filters = document.querySelectorAll(".head-obj");

function createTask(text) {
    const item = document.createElement("div");
    item.className = "task-item";

    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = text;

    const del = document.createElement('button');
    del.className = 'delete-btn';
    del.textContent = 'Delete';

    span.addEventListener('click', () => {
        item.classList.toggle('completed');
    });

    del.addEventListener('click', () => {
        item.remove();
    });

    item.appendChild(span);
    item.appendChild(del);
    return item;
}

function addTask() {
    const val = textarea.value;
    const node = createTask(val);
    taskList.prepend(node);
    textarea.value = '';
    updateCount();
}

addBtn.addEventListener('click', addTask);


function updateCount() {
    const items = document.querySelectorAll(".task-item");
    const total = items.length;
    const completed = taskList.querySelector(".task-item.completed").length;
    const pending = total - completed;
}