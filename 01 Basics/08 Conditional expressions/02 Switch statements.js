// Switch statements

// structure

// switch (expression) {
//   case value1:
//     // code to be executed if expression === value1
//     break;

//   case value2:
//     // code to be executed if expression === value2
//     break;

//   // additional cases as needed

//   default:
//   // code to be executed if none of the cases match
// }

const dayCode = 3;

switch (dayCode) {
  case 1:
    console.log("Sunday");
    break;

  case 2:
    console.log("Monday");
    break;

  case 3:
    console.log("Tuesday");
    break;

  case 4:
    console.log("Wednesday");
    break;

  case 5:
    console.log("Thursday");
    break;

  case 6:
    console.log("Friday");
    break;

  case 7:
    console.log("Saturday");
    break;

  default:
    console.log("Invalid day code");
}
