// Function Declaration:
// Function declarations define a named function. They are hoisted to the top of the scope and can be called before they are declared.

function add(a, b) {
  return a + b;
};

// Function Expression:
// Function expressions define a function as part of an expression. They are not hoisted and must be declared before use.

const subtract = function (a, b) {
  return a - b;
};

// Arrow Function:
// Arrow functions provide a concise syntax for defining functions, especially useful for short functions. They do not have their own this and arguments

const multiply = (a, b) => a * b;

// if you wrap arrow function into () it doesn't need to be return
const addTwoNumber = (a, b) => (a + b);
  

// Immediately Invoked Function Expression (IIFE):
// IIFE is a function that is immediately invoked after it is defined. It's often used to create a private scope.
(() => {
    console.log("IIFE executed!");
})();


// Callback Function:
// Callback functions are functions passed as arguments to other functions. They are often used in asynchronous operations.

function doSomethingAsync(callback) {
  setTimeout(() => {
    console.log("Async operation completed.");
    callback();
  }, 1000);
}
