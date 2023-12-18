// parent to child ==============================================

const parent = document.querySelector(".parent");
console.log(parent);
console.log(parent.children);
console.log(parent.children[1].innerHTML);

// first element child and last element child

console.log(parent.firstElementChild);
console.log(parent.lastElementChild);

for (let i = 0; i < parent.children.length; i++) {
    console.log(parent.children[i].innerHTML);
    
}

// child to parent =================================================

const child = document.querySelector('.day');
console.log(child.parentElement);

// sibling element ====================================================

const sibling = child.nextElementSibling
console.log(sibling);
