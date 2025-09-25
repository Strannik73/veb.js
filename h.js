let color = document.body;

function change_color(q){
    color.style.backgroundColor = q
}

function random_color(){
    let col1 = Math.ceil(Math.random() * 255);
    let col2 = Math.ceil(Math.random() * 255);
    let col3 = Math.ceil(Math.random() * 255);
    color.style.backgroundColor = `rgb(${col1}, ${col2}, ${col3})`;
}


