//Selectors

let enterToDoItem = document.getElementById("add-item");
let addToDoItem = document.getElementById("add-button");
let toDoList = document.getElementsByTagName("ul");


//Event Listeners

addToDoItem.addEventListener("click", addToDo)


//Functions

function addToDo(event) {

    //Create Div for item on to do list.

    let newItemDiv = document.createElement("div");
    newItemDiv.classList.add("item-div");

    //Create List item 

    let newToDo = document.createElement("li");
    newToDo.classList.add("list-item");
    newToDo.innerText = form - text.value;
    newItemDiv.appendChild(newToDo);

    event.preventDefault();
};