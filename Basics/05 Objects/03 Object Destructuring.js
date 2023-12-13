// Create an object
let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    country: 'USA'
  };
  
  // Using object destructuring to extract properties
  let { firstName, lastName, age } = person;
  
  // Log the extracted values
  console.log('First Name:', firstName); // Output: John
  console.log('Last Name:', lastName);   // Output: Doe
  console.log('Age:', age);              // Output: 30
  
  // Assigning new variable names during destructuring
  let { firstName: first, lastName: last } = person;
  
  // Log the new variables
  console.log('New First Name:', first); // Output: John
  console.log('New Last Name:', last);    // Output: Doe
  
  // Function using object destructuring in parameters
  function displayPersonDetails({ firstName, lastName, age }) {
    console.log(`Name: ${firstName} ${lastName}, Age: ${age}`);
  }
  
  // Call the function with the person object
  displayPersonDetails(person);
  // Output: Name: John Doe, Age: 30
  