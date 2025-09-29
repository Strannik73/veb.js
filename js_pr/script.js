let input = document.getElementById('input_to_list')
let parentElement = document.getElementById('task_list')

function toDoList() {
    let newDiv = document.createElement('p');
    newDiv.textContent = input.value;
    parentElement.appendChild(newDiv);
    input.value = ' ';
    let newInput = document.createElement('input');
    newInput.type = 'checkbox';
    parentElement.appendChild(newInput); 
    newInput.addEventListener('click', function(evt){
        let checkbox = evt.target
        if (checkbox.checked) {
            newDiv.style.textDecoration = 'line-through';
        } else {
            newDiv.style.textDecoration = 'none';
        }   
    });
    let delete_el = document.createElement('button');
    delete_el.textContent = 'DELETE';
    parentElement.appendChild(delete_el); 
    delete_el.addEventListener('click', function(evt){
        delete_el.remove();
        newInput.remove();
        newDiv.remove();
        redact.remove();
    })
    let redact = document.createElement('button')
    redact.textContent = "Redaction"
    parentElement.appendChild(redact);
    redact.addEventListener('click', function(evt){
        newDiv.style.display = "none"
        redact.style.display = "none"
        delete_el.style.display = "none"
        newInput.style.display = "none"
        let newnewDiv = document.createElement('input');
        parentElement.appendChild(newnewDiv);
        let save = document.createElement("button")
        save.textContent = "Save"
        parentElement.appendChild(save)
        save.addEventListener('click', function(evt){
            newDiv.style.display = "block"
            redact.style.display = "block"
            delete_el.style.display = "block"
            newInput.style.display = "block"
            newDiv.textContent = newnewDiv.value
            save.remove()
            newnewDiv.remove()
        })
    })
    local()
}
function local(){
    localStorage.setItem('data', parentElement.innerHTML);
}
function saved(){
    parentElement.innerHTML = localStorage.getItem('data')
}
saved()

