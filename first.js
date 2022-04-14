const clear = document.querySelector('.clear');
const enter = document.querySelector('#plus_button');
const input = document.querySelector('input');
const inputBox = document.querySelector('#inputBox');
const sorting = document.querySelector('#sorting');

sorting.addEventListener('click', (event) => {

})


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

    if (input.value != ""  && input.value != " ") {

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
        input.value = "";

        img.addEventListener('click', (e) => {
            li.style.display = 'none';
            const first = ul.firstChild;
            console.log(first)
            if ( li==ul.firstChild) {
                List.style.display = 'none';
            }
        })

    }
    else{
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

        img.addEventListener('click', (e) => {
            li.style.display = 'none';
            const first = ul.firstChild;
            console.log(first)
            if ( li==ul.firstChild) {
                List.style.display = 'none';
            }
        })

    }


})


