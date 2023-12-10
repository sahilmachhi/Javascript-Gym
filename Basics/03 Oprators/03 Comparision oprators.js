// Equal to (==): Checks if x is equal to y
// it cannot compares datatype of variables it only compare just its value
let x = 5;
let y = 10;
console.log('x == y:', x == y); // false


// Strict Equal to (===): Checks if x is strictly equal to y in value and type
// it also compares datatype of variables
let a = 5;
let b = '5';
console.log('a === b:', a === b); // false
// it can be true if there is same data type and with same value 
let c = "3"
let d = "3"
console.log('c === d:',c === d);


// Not Equal to (!=): Checks if x is not equal to y
let p = 8;
let q = 8;
console.log('p != q:', p != q); // false


// Strict Not Equal to (!==): Checks if x is not strictly equal to y in value or type
let m = 10;
let n = '10';
console.log('m !== n:', m !== n); // true


// Greater Than (>): Checks if x is greater than y
let r = 15;
let s = 12;
console.log('r > s:', r > s); // true


// Less Than (<): Checks if x is less than y
let u = 20;
let v = 25;
console.log('u < v:', u < v); // true


// Greater Than or Equal to (>=): Checks if x is greater than or equal to y
let g = 30;
let h = 30;
console.log('g >= h:', g >= h); // true


// Less Than or Equal to (<=): Checks if x is less than or equal to y
let j = 40;
let k = 35;
console.log('j <= k:', j <= k); // false
