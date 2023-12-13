// you can add objects inside an object

let user = {
  name: "sahil",
  email: "sahilmachhi29@gmail.com",
  "full Name": {
    firstName: "sahil",
    Surname: "Machhi",
  },
  id: 2443292384,
};

// console.log(user["full Name"]["firstName"]); // you can access object from this syntax

// you can merge objects each to other

let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  c: 3,
  d: 4,
};

let obj3 = Object.assign(obj1, obj2);
console.log(obj3);

// method 2 using spread operator which we learned in array method

let obj4 = { ...obj1, ...obj2 };
console.log(obj4);