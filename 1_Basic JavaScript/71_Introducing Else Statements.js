// Introducing Else Statements
// When a condition for an if statement is true, the block of code following it is executed. What about when that condition is false? Normally nothing would happen. With an else statement, an alternate block of code can be executed.

// if (num > 10) {
//   return "Bigger than 10";
// } else {
//   return "10 or Less";
// }
// Combine the if statements into a single if/else statement.

// Get Help
// Tests
// Waiting:You should only have one if statement in the editor
// Waiting:You should use an else statement
// Waiting:testElse(4) should return the string 5 or Smaller
// Waiting:testElse(5) should return the string 5 or Smaller
// Waiting:testElse(6) should return the string Bigger than 5
// Waiting:testElse(10) should return the string Bigger than 5
// Waiting:You should not change the code above or below the specified comments.

function testElse(val) {
    let result = "";
  
    if (val > 5) {
      result = "Bigger than 5";
    } else {
      result = "5 or Smaller";
    }
  
    return result; // Return the result
  }
  
  // Example usage:
  console.log(testElse(4)); // This should return the string "5 or Smaller"
  console.log(testElse(5)); // This should return the string "5 or Smaller"
  console.log(testElse(6)); // This should return the string "Bigger than 5"
  console.log(testElse(10)); // This should return the string "Bigger than 5"
  