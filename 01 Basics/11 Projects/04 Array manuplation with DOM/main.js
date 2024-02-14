let todoList = document.getElementById("todoList")
let add = document.querySelector("#add")
let remove = document.querySelector("#remove")
let inputText = document.getElementById("inputText")


let array = ["sahil", "rahil", "shailee"]
console.log(array);


let newArray
let li
function renderArray() {
    array.forEach(items => {
        li = document.createElement("li")
        li.innerText = items;
        todoList.appendChild(li);
    });
}

renderArray()

remove.addEventListener("click", () => {
    todoList.removeChild(li);
    array.pop()
    console.log(
        array
    );
    renderArray()
})


add.addEventListener("click", () => {



})





