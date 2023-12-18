// create Element 
const newLi = document.createElement("li")
// add content to element 
newLi.innerText = "hello world";
console.log(newLi);

// append to element's child 
document.querySelector("ul").appendChild(newLi);

// append to element using append 
const a = document.createElement("a")
a.innerText = "hello Sahil"
const ulElmn = document.querySelector("ul")
ulElmn.append(a)
console.log(a);


// edit Element
// document.querySelector(".list").lastElementChild.innerHTML = "java";

// remove element 

const lastElm = document.querySelector(".list").firstElementChild.remove()
console.log(lastElm);