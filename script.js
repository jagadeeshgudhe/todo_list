document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText ==='') {
        alert('Please enter a task!');
        return;
    }

    const taskList = document.getElementById('task-list');


    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    taskItem.appendChild(taskSpan);


    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';
    taskItem.appendChild(removeBtn);

    taskSpan.addEventListener('click', () => {
        taskItem.classList.toggle('completed');
    });

    removeBtn.addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });


    taskList.appendChild(taskItem);

    taskInput.value = '';
}
