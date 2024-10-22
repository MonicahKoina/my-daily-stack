const taskInput = document.getElementById('inputTask');
const addButton = document.getElementById('add');
const todos = document.getElementById('todos');

loadTask();

function addTasks() {
    const task = taskInput.value.trim();

    if (task) {
        createTaskElement(task);
        taskInput.value = '';
        saveTask();
    } else {
        alert('Add task');
    }
}

addButton.addEventListener('click', addTasks);

function createTaskElement(task) {
    const todosList = document.createElement('li');
    todosList.textContent = task;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';

    deleteButton.addEventListener('click', function() {
        todos.removeChild(todosList);
        saveTask();
    });

    todosList.appendChild(deleteButton);
    todos.appendChild(todosList);
}

function saveTask() {
    let todo = [];
    todos.querySelectorAll('li').forEach(function(item) {
        todo.push(item.firstChild.textContent.trim());
    });
    localStorage.setItem("todo", JSON.stringify(todo));
}

function loadTask() {
    const task = JSON.parse(localStorage.getItem('todo')) || [];
    task.forEach(createTaskElement);
}