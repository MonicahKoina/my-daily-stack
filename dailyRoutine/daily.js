let taskFormElem = document.getElementById("taskForm");
let addTaskElem = document.getElementById("addTask");
let fromTimeElem = document.getElementById("fromTime");
let toTimeElem = document.getElementById("toTime");
let priorityElem = document.getElementById("priority");

let dateElem = document.getElementById("date");
let newDate = new Date();
dateElem.textContent = newDate.toDateString();

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
function loadTasks() {
    let taskTableElem = document.querySelector("#taskTable tbody");
    taskTableElem.innerHTML = "";

    tasks.forEach((task, index) => {
        let row = document.createElement("tr");

        let actionTd = document.createElement("td");

        let markDoneBtn = document.createElement("button");
        markDoneBtn.textContent = "Mark Done";
        markDoneBtn.className = "bg-green-500 text-white px-2 py-1 rounded mr-2";
        markDoneBtn.addEventListener("click", function () {
            row.style.textDecoration = "line-through";
        });
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "bg-red-500 text-white px-2 py-1 rounded";
        deleteBtn.addEventListener("click", function () {
            tasks.splice(index, 1);
            saveTasks();
            loadTasks();
        });

        actionTd.appendChild(markDoneBtn);
        actionTd.appendChild(deleteBtn);
        let nameTd = document.createElement("td");
        nameTd.textContent = task.name;
        let timeTd = document.createElement("td");
        timeTd.textContent = `${task.start} - ${task.end}`;
        let priorityTd = document.createElement("td");
        priorityTd.textContent = task.priority;
        row.appendChild(actionTd);
        row.appendChild(nameTd);
        row.appendChild(timeTd);
        row.appendChild(priorityTd);
        taskTableElem.appendChild(row);
    });
}
loadTasks();
taskFormElem.addEventListener("submit", function (e) {
    e.preventDefault();
    let taskName = addTaskElem.value.trim();
    let startTime = fromTimeElem.value;
    let endTime = toTimeElem.value;
    let taskPriority = priorityElem.value;
    let task = {
        name: taskName,
        start: startTime,
        end: endTime,
        priority: taskPriority
    };
    tasks.push(task);
    saveTasks();
    loadTasks();
});
