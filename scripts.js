
const todoInput = document.getElementById("input_todo")
const addButton = document.getElementById("btnAdd")
const todoList = document.getElementById("todoList")

addButton.addEventListener("click", ()=>{
    let insert = todoInput.value
    let toDo = document.createElement("li");
    toDo.classList.add('mdl-list__item')
    toDo.innerHTML =  `<span class="mdl-list__item-primary-content">
                        <i class="material-icons  mdl-list__item-avatar">add</i>
                            ${insert}
                        </span>`;

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML =`<i class="material-icons  mdl-list__item-avatar">remove</i>`;

    toDo.appendChild(deleteButton);
    todoList.appendChild(toDo);

    deleteButton.addEventListener("click", () =>{
        toDo.remove()
    })

})
