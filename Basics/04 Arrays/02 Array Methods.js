let arr = [1, 2, 3, 4, 5, 6, "sahil", true, "vijay", 10, 11, false, 99];

// pop() method 
// The pop() method deletes the last element of the array.
arr.pop();
console.log(arr);

// push() method 
// The push() method adds a new element to the array at the end.
arr.push(98);
console.log(arr);

// shift() method
// The shift() method deletes the first element of the array.
arr.shift();
console.log(arr);

// unshift() method 
// The unshift() method adds a new element to the beginning of the array.
arr.unshift("One");
console.log(arr);

// concat() method
// The concat() method merges two arrays and returns a new array.
let newArr = ['amit', 'shahrukh', 'salman'];
let mergedArr = newArr.concat(arr);
console.log(mergedArr);
// Also, the concat() method doesn't change the old array; it just returns a new array created by merging the two arrays.
console.log(newArr);
console.log(arr);

// slice() method
// The slice() method returns a shallow copy of a portion of the array.
let slicedArr = arr.slice(1, 4);
console.log(slicedArr); // Does not modify arr

// splice() method
// The splice() method changes the contents of an array by removing or replacing elements.
// It takes three parameters: starting index, number of elements to remove, and optional new elements to add.
let splicedArr = arr.splice(1, 2, 'A', 'B');
console.log(splicedArr);
console.log(arr);