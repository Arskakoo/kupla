window.addEventListener('load', function () {
    const taskList = document.getElementById('taskList');
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    savedTasks.forEach(function (task) {
        const li = createTaskElement(task.text, task.timestamp);
        taskList.appendChild(li, id = "tasktext");
    });
});


function tallennaTieto() {
    const inputField = document.getElementById('tietokentta');
    const taskText = inputField.value;
    if (taskText.trim() === '') {
        return;
    }

    const taskList = document.getElementById('taskList');
    const timestamp = getCurrentTime();
    const li = createTaskElement(taskText, timestamp);
    taskList.appendChild(li);

    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    savedTasks.push({ text: taskText, timestamp: timestamp });
    localStorage.setItem('tasks', JSON.stringify(savedTasks));

    inputField.value = '';
}


function createTaskElement(taskText, timestamp) {
    const li = document.createElement('li');
    li.textContent = taskText;

    const timeSpan = document.createElement('span');
    timeSpan.textContent = timestamp;
    timeSpan.classList.add('timestamp');
    li.appendChild(timeSpan);


    li.addEventListener('dblclick', function () {
        const taskList = document.getElementById('taskList');
        taskList.removeChild(li);

        const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const index = savedTasks.findIndex(function (task) {
            return task.text === taskText && task.timestamp === timestamp;
        });
        if (index !== -1) {
            savedTasks.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(savedTasks));
        }
    });

    return li;
}


function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return hours + ':' + minutes;
}