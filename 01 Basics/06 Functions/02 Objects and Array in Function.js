// you can use object keys and values in function 

obj1 = {
  name: "sahil",
  price: 999,
  courseName: "Javascript Master",
};

// create function with parameter 
function handleObject(objname) {
  return console.log(
    `username ${objname.name} has created course ${objname.courseName} and its price is $${objname.price}`
  );
}
// pass object as argument in when triggering function 
handleObject(obj1);



// as same you can use arrays in function 
const arr = [1,2,4,6,7,8];

function arrayHandle (anyArray) {
    return console.log(`3rd element of array is ${anyArray[2]} and 5th element of array is ${anyArray[4]}`);
};

arrayHandle(arr);

