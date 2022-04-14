const clear = document.querySelector('.clear');
const enter = document.querySelector('#plus_button');
const input = document.querySelector('input');
const inputBox = document.querySelector('#inputBox');
const sorting = document.querySelector('#sorting');

// sorting.addEventListener('click', (event) => {

// })
clear.addEventListener('click', (event) => {
    if (input.value != "") {
        input.value = "";
    }
    else {
        alert("Enter the value");
    }
})

const List = document.createElement('div');
List.classList.add('List');
const ul = document.createElement('ul');
ul.style.position = 'relative';
List.append(ul);
const box = document.querySelector('.box')
box.insertBefore(List, inputBox);


enter.addEventListener('click', (event) => {

    if (input.value != "" && input.value != " ") {

        createInput();
        input.value = "";
    }
    else {
        createInput();

    }
})

function createInput() {
    const li = document.createElement('li');
    const newInput = document.createElement('input')
    newInput.value = input.value;
    newInput.classList.add('newInput')
    let img = document.createElement('img');
    img.src = "images/Group77.png";
    img.classList.add('clearItem');
    li.append(newInput)
    li.append(img);
    ul.append(li);
    img.style.boxSizing = 'border-box';
    List.style.display = 'block';
    // li.classList.add('dropzone')
    // li.draggable = 'true';
    // li.ondragstart = "event.dataTransfer.setData('text/plain',null)";
    img.addEventListener('click', (e) => {
        li.style.display = 'none';
        const first = ul.firstChild;
        console.log(first)
        if (li == ul.firstChild) {
            List.style.display = 'none';
        }
    })
}
//     var dragged;
//     document.addEventListener("dragstart", function (event) {
//         dragged = event.target;
//     }, false);

//     document.addEventListener("dragover", function (event) {
//         event.preventDefault();
//     }, false);

//     document.addEventListener("drop", function (event) {
//         event.preventDefault();
//         if (event.target.className == "dropzone") {
//             dragged.parentNode.removeChild(dragged);
//             event.target.appendChild(dragged);
//         }
//     }, false);

