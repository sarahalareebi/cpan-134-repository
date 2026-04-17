// let chBgBtn = document.getElementById('chgColor'); // Accessing the element
let chgBgBtn = document.querySelector('#chgColor');
chgBgBtn.addEventListener('click, changeBackground');

function changeBackground(){
    document.body.style.backgroundColor = 'skyblue';
    let uList = document.getElementById('uList');
    let newListItem = document.createElement('li');
    newListItem.textContent = 'You clicked Change Background button.';
    uList.appendChild(newListItem);
}

document.getElementById('resetColor').addEventListener('click',resetBackground);
function resetBackground(){
    document.body.style.backgroundColor = 'salmon';
    let newListItem = document.createElement('li');
    newListItem.textContent = 'You clicked Reset Background button.';
    document.getElementById('uList').appendChild(newListItem);

}

let buttons = document.getElementsByTagName('button');
for (const element of buttons) {
    console.log(element.textContent);
}

// let bgBtns = document.getElementsByClassName('bgBtns');
let bgBtns = document.querySelector()
Array.from(bgBtns).forEach(ele=>console.log('Class Example: ' + ele.textContent));