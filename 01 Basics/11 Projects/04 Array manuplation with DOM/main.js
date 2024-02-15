let todoList = document.getElementById("todoList");
let add = document.querySelector("#add");
let remove = document.querySelector("#remove");
let inputText = document.getElementById("inputText");


let array = ["berlin", "jhon", "thomas"];
console.log(array);

let li;
function renderArray() {
    if (todoList.hasChildNodes() === true) {
        todoList.innerHTML = '';
        array.forEach(items => {
            li = document.createElement("li");
            todoList.appendChild(li);
            li.innerText = items;

        });
    } else {
        array.forEach(items => {
            li = document.createElement("li");
            todoList.appendChild(li);
            li.innerText = items;
        });
    }
};
renderArray()

remove.addEventListener("click", () => {
    if (array.length === 0) {
        alert("no name left");
    } else {
        todoList.removeChild(li);
        array.pop()
        console.log(
            array
        );
        renderArray();
    }
});


add.addEventListener("click", () => {
    let inputVal = inputText.value;
    if (array.includes(inputVal)) {
        alert("array has alredy this name");
    }
    else {
        if (inputVal == "") {
            alert("cannot add empty value");
        }
        else {
            array.push(inputVal);
            inputText.value = "";
            renderArray();
            console.log(array);
        }
    }
});