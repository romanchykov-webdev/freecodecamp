// Return Early Pattern for Functions
// When a return statement is reached, the execution of the current function stops and control returns to the calling location.

// Example

// function myFun() {
//   console.log("Hello");
//   return "World";
//   console.log("byebye")
// }
// myFun();
// The above will display the string Hello in the console, and return the string World. The string byebye will never display in the console, because the function exits at the return statement.

// Modify the function abTest so that if a or b are less than 0 the function will immediately exit with a value of undefined.

// Hint
// Remember that undefined is a keyword, not a string.

// Get Help
// Tests
// Waiting:abTest(2, 2) should return a number
// Waiting:abTest(2, 2) should return 8
// Waiting:abTest(-2, 2) should return undefined
// Waiting:abTest(2, -2) should return undefined
// Waiting:abTest(2, 8) should return 18
// Waiting:abTest(3, 3) should return 12
// Waiting:abTest(0, 0) should return 0

function abTest(a, b) {
    if (a < 0 || b < 0) {
      return undefined;
    }
  
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  