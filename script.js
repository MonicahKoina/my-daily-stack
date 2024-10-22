const addButton=document.getElementById('add');
const taskInput = document.getElementById('inputTask');
const todos = document.getElementById('todos');

loadTask();
//create a function for adding tasks
function addTasks(){
    const task = taskInput.value.trim();//remove white spaces

    if (task){
        createtaskElement(task);
        taskInput.value='';

        saveTask();
    }else{
        alert('Add task');
    }
}
addButton.addEventListener('click', addTasks);

function createtaskElement(task){
    const todosList=document.createElement('li');
    todosList.textContent=task;
    todos.appendChild(todosList);

}

function saveTask(){
    let todo = [];
    todos.querySelectorAll('li').forEach(function(item){
        todo.push(item.textContent.trim());
    });
    localStorage.setItem("todo", JSON.stringify(todo));
}

function loadTask(){
    const task = JSON.parse(localStorage.getItem('todo')) || [];
    task.forEach(createtaskElement);
}