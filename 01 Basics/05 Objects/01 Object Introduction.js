// basic example of objects 



var users = {
    name :"Sahil",
    "full name":"Sahil Dilipkumar Machhi",
    age: 23,
    isUserLoggedIn: false,
    logInDay: ["Monday", "Tuesday", "wednesday"],
    email: "sahilmachhi29@gmail.com",
}

console.log(users.age); //not recommended
console.log(users["full name"]); // best practice

// you can change object value like below code given 
users.name = 'Whonix';
console.log(users['name']);
// Now, the 'name' property of 'users' is 'Whonix'

// you can freeze object that mean you cant change value of object after using freeze value 
Object.freeze(users);
// now you cant change object property 
users.name = 'Sahil';
console.log(users['name']);

  
// Get keys of the object using Object.keys()
let keys = Object.keys(users);
  
// Get values of the object using Object.values()
let values = Object.values(users);
  
// Log the results
console.log('Keys:', keys);  
console.log('Values:', values);

// imp 
// keys and value returns an array so we can use loops 
  