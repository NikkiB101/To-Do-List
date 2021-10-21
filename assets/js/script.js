//Selectors

let toDoInput = document.querySelector(".toDoInput");
let addToDoItem = document.getElementById("add-button");
let toDoList = document.querySelector(".to-do-list");



//Event Listeners

addToDoItem.addEventListener("click", addToDo)
toDoList.addEventListener("click", deleteitem);


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

    //Remove input value after adding to list

    toDoInput.value = "";

    // Mark as Complete Button
    let completedButton = document.createElement("button");
    completedButton.innerHTML = `<i class="fas fa-check"></i>`;
    completedButton.classList.add("complete-btn");
    newItemDiv.appendChild(completedButton)

    //Delete Task

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("deletebtn");
    deleteButton.innerHTML = `<i class="fas fa-trash-alt"></i>`;
    newItemDiv.appendChild(deleteButton);
}

function deleteitem(e) {
    let item = e.target;
    if (item.classList[0] === "deletebtn") {
        let todo = item.parentElement;
        todo.remove();
    }
}