// Comparison with the Less Than Or Equal To Operator
// The less than or equal to operator (<=) compares the values of two numbers. If the number to the left is less than or equal to the number to the right, it returns true. If the number on the left is greater than the number on the right, it returns false. Like the equality operator, the less than or equal to operator converts data types.

// Examples

// 4   <= 5 // true
// '7' <= 7 // true
// 5   <= 5 // true
// 3   <= 2 // false
// '8' <= 4 // false
// Add the less than or equal to operator to the indicated lines so that the return statements make sense.

// Get Help
// Tests
// Waiting:testLessOrEqual(0) should return the string Smaller Than or Equal to 12
// Waiting:testLessOrEqual(11) should return the string Smaller Than or Equal to 12
// Waiting:testLessOrEqual(12) should return the string Smaller Than or Equal to 12
// Waiting:testLessOrEqual(23) should return the string Smaller Than or Equal to 24
// Waiting:testLessOrEqual(24) should return the string Smaller Than or Equal to 24
// Waiting:testLessOrEqual(25) should return the string More Than 24
// Waiting:testLessOrEqual(55) should return the string More Than 24
// Waiting:You should use the <= operator at least twice

// Setup
function testLessOrEqual(val) {
    if (val <= 12) {  // Check if val is less than or equal to 12
      return "Smaller Than or Equal to 12";
    }
  
    if (val <= 24) {  // Check if val is less than or equal to 24
      return "Smaller Than or Equal to 24";
    }
  
    return "More Than 24";
  }
  
  // Example usage:
  console.log(testLessOrEqual(0));    // This should return "Smaller Than or Equal to 12"
  console.log(testLessOrEqual(11));   // This should return "Smaller Than or Equal to 12"
  console.log(testLessOrEqual(12));   // This should return "Smaller Than or Equal to 12"
  console.log(testLessOrEqual(23));   // This should return "Smaller Than or Equal to 24"
  console.log(testLessOrEqual(24));   // This should return "Smaller Than or Equal to 24"
  console.log(testLessOrEqual(25));   // This should return "More Than 24"
  console.log(testLessOrEqual(55));   // This should return "More Than 24"
  