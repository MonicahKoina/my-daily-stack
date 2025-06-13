let taskFormElem = document.getElementById("taskForm")
let addTaskElem = document.getElementById("addTask")
let fromTimeElem = document.getElementById("fromTime")
let toTimeElem = document.getElementById("toTime")
let priorityElem = document.getElementById("priority")
taskFormElem.addEventListener("submit", function (e) {
    e.preventDefault()
    let taskName = addTaskElem.value
    let startTime = fromTimeElem.value
    let endTime = toTimeElem.value
    let taskPriority = priority.value;
    console.log("task", taskName)
    console.log("started at", startTime)
    console.log("Ended at", endTime)
    console.log("this task is ", taskPriority)

    let taskTableElem = document.querySelector("#taskTable tbody");
    let row = document.createElement('tr')
    let checkTd = document.createElement('td')
    checkTd.innerHTML = `<button><i class='bxr  bxs-check'  style='color:#000000'></i>  </button>`
    let nameTd = document.createElement('td')
    nameTd.textContent = taskName;
    let timeTd = document.createElement('td')
    timeTd.textContent = `${startTime} - ${endTime}`
    let priorityTd = document.createElement('td')
    priorityTd.textContent = taskPriority
    row.appendChild(checkTd)
    row.appendChild(nameTd)
    row.appendChild(timeTd)
    row.appendChild(priorityTd)
    taskTableElem.appendChild(row)

})