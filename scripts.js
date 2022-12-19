
const todoInput = document.getElementById("input_todo")
const addButton = document.getElementById("btnAdd")
const todoList = document.getElementById("todoList")

addButton.addEventListener("click", ()=>{
    let insert = todoInput.value
    let toDo = document.createElement("li");
    toDo.innerHTML = insert;

    let deleteButton = document.createElement("button");
    deleteButton.innerText = "X";

    toDo.appendChild(deleteButton);
    todoList.appendChild(toDo);

    deleteButton.addEventListener("click", () =>{
        toDo.remove()
    })

})