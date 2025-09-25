let input_word = document.getElementById('input_polindrom');

function lavrik(){
    let newElement = document.createElement('p')
    let element = document.createElement('input')
    newElement.textContent = input_word.value
    document.body.append(newElement)
}

