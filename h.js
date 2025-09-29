


function addTask(){
    let task = document.createElement('div');
    taskList.append(task);

    let checkTask = document.createElement('input')
    let taskText = document.createElement('p')
    let editTask = document.createElement('button')
    let deleteTask = document.createElement('button')

    checkTask.type = 'checkbox'
    taskText.textContent = taskToAdd.value;
    taskText.textContent = 'Edit'
    deleteTask.textContent = 'Delete'

    taskToAdd.value = ' '
    saveToAdd()
}
addButton.addEventListener('click', add)




