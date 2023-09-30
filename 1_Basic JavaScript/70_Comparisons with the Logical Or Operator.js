// Comparisons with the Logical Or Operator
// The logical or operator (||) returns true if either of the operands is true. Otherwise, it returns false.

// The logical or operator is composed of two pipe symbols: (||). This can typically be found between your Backspace and Enter keys.

// The pattern below should look familiar from prior waypoints.

// if (num > 10) {
//   return "No";
// }
// if (num < 5) {
//   return "No";
// }
// return "Yes";
// This code will return Yes if num is between 5 and 10 (5 and 10 included). The same logic can be written with the logical or operator.

// if (num > 10 || num < 5) {
//   return "No";
// }
// return "Yes";
// Combine the two if statements into one statement which returns the string Outside if val is not between 10 and 20, inclusive. Otherwise, return the string Inside.

// Get Help
// Tests
// Waiting:You should use the || operator once
// Waiting:You should only have one if statement
// Waiting:testLogicalOr(0) should return the string Outside
// Waiting:testLogicalOr(9) should return the string Outside
// Waiting:testLogicalOr(10) should return the string Inside
// Waiting:testLogicalOr(15) should return the string Inside
// Waiting:testLogicalOr(19) should return the string Inside
// Waiting:testLogicalOr(20) should return the string Inside
// Waiting:testLogicalOr(21) should return the string Outside
// Waiting:testLogicalOr(25) should return the string Outside


function testLogicalOr(val) {
    // Use the || operator to check if val is not between 10 and 20 (inclusive)
    if (val < 10 || val > 20) {
      return "Outside";
    }
  
    return "Inside"; // Return "Inside" if the condition is not met
  }
  
  // Example usage:
  console.log(testLogicalOr(0));    // This should return "Outside"
  console.log(testLogicalOr(9));    // This should return "Outside"
  console.log(testLogicalOr(10));   // This should return "Inside"
  console.log(testLogicalOr(15));   // This should return "Inside"
  console.log(testLogicalOr(19));   // This should return "Inside"
  console.log(testLogicalOr(20));   // This should return "Inside"
  console.log(testLogicalOr(21));   // This should return "Outside"
  console.log(testLogicalOr(25));   // This should return "Outside"
  