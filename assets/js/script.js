//Selectors

let toDoInput = document.querySelector(".toDoInput");
let addToDoItem = document.getElementById("add-button");
let toDoList = document.querySelector(".to-do-list");



//Event Listeners

addToDoItem.addEventListener("click", addToDo)


//Functions

function addToDo(event) {

    event.preventDefault();

    //Create Div for item on to do list.

    let newItemDiv = document.createElement("div");
    newItemDiv.classList.add("item-div");

    //Create List item 

    let newToDo = document.createElement("li");
    newToDo.classList.add("list-item");
    newToDo.innerText = toDoInput.value;
    newItemDiv.appendChild(newToDo);

    //Attach New Item to our To Do List

    toDoList.appendChild(newItemDiv);

};