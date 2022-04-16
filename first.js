const clear = document.querySelector('.clear');
const enter = document.querySelector('#plus_button');
const input = document.querySelector('input');
const inputBox = document.querySelector('#inputBox');

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

    createInput();
    input.value = "";

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
        ul.removeChild(li)

        const first = ul.firstChild;
        if (li == ul.firstChild) {
            List.style.display = 'none';
        }
    })
}

const sorting = document.querySelector('#sortingIcon');

sorting.addEventListener('mouseover', (e) => {

    if (sorting.src = "images/Group74.png") {
        sorting.src = "images/Group73.png";
    }
    sorting.addEventListener('mouseout', (e) => {
        if (sorting.src = "images/Group74.png") {
            sorting.src = "images/Group74.png";
        }
        else {
            sorting.src = "images/Group90.png";
        }
    })
})

let arr = [];
let a = 1;
sorting.addEventListener('click', (event) => {

    if (a == 1) {
        sorting.src = "images/Group90.png";
        const items = document.getElementsByTagName('li');
        for (let i = 0; i < items.length; i++) {
            console.log(items[i])
            arr.push(items[i].firstChild.value);
        }
        arr.sort();
        console.log(arr)
        for (let i = 0; i < items.length; i++) {
            items[i].firstChild.value = arr[i];
        }
        a = 0;
    }

    else if (a == 0) {

        sorting.src = 'images/Group74.png';
        const items = document.getElementsByTagName('li');

        console.log('aaa')
        console.log(arr)
        arr.reverse();
        for (let i = 0; i < items.length; i++) {
            items[i].firstChild.value = arr[i];
        }
        a = 1;
    }

})








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

