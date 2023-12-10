// string with number to number conversion

// returns as it is but in the form of number 

var a = "4";
let aNumber = Number(a);
console.log(aNumber);
console.log(typeof aNumber);

// string with letters with number to number conversion

// returns as NaN and identified as number 

var b = "8asdfasdad";
let bNumber = Number(b);
console.log(bNumber);
console.log(typeof bNumber);

// boolean to number conversion

// number returns true as 1 and false as 0

var c = true;
var d = false;
let cNum = Number(c);
let dNum = Number(d);
console.log(cNum);
console.log(dNum);


// boolean to string conversion 

// string returns true as true and false as false but in string type 

let cStr = String(c);
let dStr = String(d);
console.log(cStr);
console.log(dStr);

console.log(typeof cStr);
console.log(typeof dStr);

// number and string to boolean conversion 

// in number to boolean 0 < any number returns ture and 0 returns false
// in string empty string returns false and string with value returns true

let numA = 0;
let numB = 1;
let numC = 4;

let booleanA = Boolean(numA);
let booleanB = Boolean(numB);
let booleanC = Boolean(numC);

console.log(booleanA);
console.log(booleanB);
console.log(booleanC);

let stringA = "sahil";
let stringB = "";

let booleanD = Boolean(stringA);
let booleanE = Boolean(stringB);

console.log(booleanD);
console.log(booleanE);