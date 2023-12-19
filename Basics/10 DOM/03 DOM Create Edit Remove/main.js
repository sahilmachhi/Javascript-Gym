// create Element 
const newLi = document.createElement("li")
// add content to element 
newLi.innerText = "hello world";
console.log(newLi);

// append to element's child 
document.querySelector("ul").appendChild(newLi);


// edit Element
document.querySelector(".list").lastElementChild.innerHTML = "java";

// remove element 
const lastElm = document.querySelector(".list").firstElementChild.remove()
console.log(lastElm);