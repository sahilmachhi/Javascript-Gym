// Code written within parentheses is called a scope, which means the variable will not be accessible outside the scope. Only 'var' can do that, and which is bad practice.So, JavaScript introduced 'const' and 'let'.

{
    var a = 1;
    let b = 2;
    const c = 3;
}

// you can't console.log() let and const variables outside scopes
// console.log(`var ${a}`);
// console.log(`let ${b}`);
// console.log(`const ${c}`);


function one(){
    const username = "Sahil"
    // created another scope inside function one by creating function two
    function two(){
        const website = "youtube"
        console.log(username);
    }
  // this console.log() not will not get access of website variable
    // console.log(website);
    
    two()
}
one()



// console.log(addone(5))
function addone(num){
    return num + 1
}


// you cannot console.log() addTwo cause the function is declared in variable 

// this is called Hoisting 
// console.log(addTwo(5));
const addTwo = function(num){
    return num + 2
}
