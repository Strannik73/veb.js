let clearDataButton = document.getElementById('clearData');
let inputToList = document.getElementById('input_to_list');
let addButton = document.getElementById('addButton');
let tasksList = document.getElementById('tasks_list');

function addTask() {
    if (inputToList.value.trim() === '') return;

    let task = document.createElement('div');
    task.className = 'task';

    let check = document.createElement('input');
    check.type = 'checkbox';
    task.appendChild(check);

    let taskText = document.createElement('p');
    taskText.textContent = inputToList.value;
    task.appendChild(taskText);

    let deleteButton = document.createElement('button');
    deleteButton.style.backgroundColor = 'turquoise';
    deleteButton.textContent = "Удалить";
    task.appendChild(deleteButton);

    let editButton = document.createElement('button');
    editButton.style.backgroundColor = 'turquoise';
    editButton.textContent = "Редактировать";
    task.appendChild(editButton);

    tasksList.appendChild(task);
    inputToList.value = '';

    savedTask();
}

addButton.addEventListener('click', addTask);

function changeTask(e) {
    let task = e.target.closest('.task');
    if (!task) return;

    if (e.target.tagName === 'INPUT' && e.target.type === 'checkbox') {
        task.classList.toggle('checked');
        savedTask();
    } else if (e.target.tagName === 'BUTTON' && e.target.textContent === 'Удалить') {
        task.remove();
        savedTask();
    } else if (e.target.tagName === 'BUTTON' && e.target.textContent === 'Редактировать') {
        let taskText = task.querySelector('p');
        let newInput = document.createElement('input');
        newInput.type = 'text';
        newInput.value = taskText.textContent;

        task.replaceChild(newInput, taskText);
        e.target.textContent = 'Сохранить';
    } else if (e.target.tagName === 'BUTTON' && e.target.textContent === 'Сохранить') {
        let newInput = task.querySelector('input[type="text"]');
        let newText = document.createElement('p');
        newText.textContent = newInput.value;

        task.replaceChild(newText, newInput);
        e.target.textContent = 'Редактировать';
        savedTask();
    }
}

tasksList.addEventListener('click', changeTask);

function savedTask() {
    localStorage.setItem('data', tasksList.innerHTML);
}

function showTask() {
    let saved = localStorage.getItem('data');
    if (saved) {
        tasksList.innerHTML = saved;
    }
}

function clearData() {
    localStorage.clear();
    tasksList.innerHTML = '';
}

clearDataButton.addEventListener('click', clearData);

showTask();

