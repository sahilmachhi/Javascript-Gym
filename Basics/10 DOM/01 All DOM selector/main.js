// get element by its id +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// get element by its id name 
document.getElementById('heading');

// get element's inner html 
document.getElementById('heading').id;

//get element's className by using getElementById
document.getElementById('heading').className;

// getAttribute is a method in JavaScript that is used to retrieve the value of a specified attribute of an HTML element. When you're working with HTML elements in the Document Object Model (DOM), each element can have various attributes like id, class, src, href, etc.
document.getElementById('heading').getAttribute('id');
document.getElementById('heading').getAttribute('class');



// same goes with get element by its classname +++++++++++++++++++++++++++++++++++++++++

document.getElementsByClassName('heading')
// note: when we have multiple element with same classname it and we use getElementByClassName it returns HTMLCollection list 


// diffrence between innerText, textContent and innerHTML+++++++++++++++++++++++++++++++

const title = document.getElementById("title");

title.innerHTML 
// it returns whole html inside of element as it is like 
// 'this is Document Object Model<span>test text hello world!</span>' output when console.log();

title.innerText
// this return text inside the html element but only visible text it will not text which is hidden by css
// 'this is Document Object Model' output when console.log();

title.textContent
// this will return all text inside html content even hidden one 
// 'this is Document Object Modeltest text hello world!' outuput when console.log();


// query selectors +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//querySelector()
document.querySelector(".title")
// It select first and only one in the HTML query 

// querySelectorAll()
document.querySelectorAll(".title")
// it select all query with same id,classname and HTML tag and returns NodeList 

// ++++++++++++++++++++++++++++++++++

// querySelector with htmlTag 
document.querySelector("h1")

// querySelector with className 
document.querySelector(".heading")

// querySelector with id 
document.querySelector("#heading")


// nodeList vs HTMLCollection++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 

//HTMLCollection
// HTMLCollection returns collection of html and it doesn't provide any looping function 

// nodeList 
// nodeList return node list of html and it provides forEach looping function but it can't work as fully functional array


// you can convert HTMLCollection and nodeList to an array 

Array.from(document.querySelectorAll(".heading"))
