let todoList = document.getElementById("todoList")
let add = document.querySelector("#add")
let remove = document.querySelector("#remove")
let inputText = document.getElementById("inputText")


let array = ["sahil", "rahil", "shailee"]
console.log(array);


let newArray
let li
function renderArray() {

    if (todoList.hasChildNodes() === true) {
        todoList.innerHTML = '';
        array.forEach(items => {
            li = document.createElement("li")
            todoList.appendChild(li);
            li.innerText = items;

        });
    } else {
        array.forEach(items => {
            li = document.createElement("li")
            todoList.appendChild(li);
            li.innerText = items;

        });
    }
}

renderArray()

remove.addEventListener("click", () => {
    if (array.length === 0) {
        alert("no name left")
    } else {
        todoList.removeChild(li);
        array.pop()
        console.log(
            array
        );
        renderArray()
    }
})


add.addEventListener("click", () => {



})





