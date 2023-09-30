// Passing Values to Functions with Arguments
// Parameters are variables that act as placeholders for the values that are to be input to a function when it is called. When a function is defined, it is typically defined along with one or more parameters. The actual values that are input (or "passed") into a function when it is called are known as arguments.

// Here is a function with two parameters, param1 and param2:

// function testFun(param1, param2) {
//   console.log(param1, param2);
// }
// Then we can call testFun like this: testFun("Hello", "World");. We have passed two string arguments, Hello and World. Inside the function, param1 will equal the string Hello and param2 will equal the string World. Note that you could call testFun again with different arguments and the parameters would take on the value of the new arguments.

// Create a function called functionWithArgs that accepts two arguments and outputs their sum to the dev console.
// Call the function with two numbers as arguments.
// Get Help
// Tests
// Waiting:functionWithArgs should be a function.
// Waiting:functionWithArgs(1,2) should output 3.
// Waiting:functionWithArgs(7,9) should output 16.
// Waiting:You should call functionWithArgs with two numbers after you define it.

function functionWithArgs(num1, num2) {
    console.log(num1 + num2);
  }
  
  functionWithArgs(1, 2); // Output: 3
  functionWithArgs(7, 9); // Output: 16
  