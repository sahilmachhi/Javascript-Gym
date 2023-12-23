// if Statement 
// The if statement in JavaScript is used for conditional execution. If the condition specified in the if statement is true, the code inside the curly braces will run; otherwise, it won't.

let numA = 2;
if (numA < 10) {
    console.log(`number is less than 10`)
};

// if else Statement 
// The if-else statement in JavaScript is another form of conditional execution. If the condition specified in the if statement is true, the code within its block will run; otherwise, the code within the else block will be executed.

let numB = 30
if (numB < 15) {
    console.log('numB is smaller than 15')
} else {
    console.log('numB is bigger than 15')
}

// if else if Statement 

let numC = 7;

if (numC > 10) {
  console.log("The numC is greater than 10.");
} else if (numC > 3) {
  console.log("The numC is greater than 3 but not greater than 10.");
} else if (numC > 5) {
    console.log("The numC is greater than 5 but not greater than 10.");
} else {
  console.log("The numC is 5 or less.");
}




