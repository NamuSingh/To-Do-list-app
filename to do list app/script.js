function addTask() {
    const newTask = document.createElement('li');
    const taskList = document.getElementById('taskList');
    taskList.appendChild(newTask);
    newTask.textContent = document.getElementById('inputTask').value;
    document.getElementById('inputTask').value = '';
    deleteTask(newTask);
}

function deleteTask(newTask) {
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => newTask.remove();
    newTask.appendchild(deleteBtn);
}

document.getElementById("addTaskButton").addEventListener("click", addTask);