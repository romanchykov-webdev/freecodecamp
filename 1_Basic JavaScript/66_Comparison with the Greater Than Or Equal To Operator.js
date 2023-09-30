// Comparison with the Greater Than Or Equal To Operator
// The greater than or equal to operator (>=) compares the values of two numbers. If the number to the left is greater than or equal to the number to the right, it returns true. Otherwise, it returns false.

// Like the equality operator, the greater than or equal to operator will convert data types while comparing.

// Examples

// 6   >=  6  // true
// 7   >= '3' // true
// 2   >=  3  // false
// '7' >=  9  // false
// Add the greater than or equal to operator to the indicated lines so that the return statements make sense.

// Get Help
// Tests
// Waiting:testGreaterOrEqual(0) should return the string Less than 10
// Waiting:testGreaterOrEqual(9) should return the string Less than 10
// Waiting:testGreaterOrEqual(10) should return the string 10 or Over
// Waiting:testGreaterOrEqual(11) should return the string 10 or Over
// Waiting:testGreaterOrEqual(19) should return the string 10 or Over
// Waiting:testGreaterOrEqual(100) should return the string 20 or Over
// Waiting:testGreaterOrEqual(21) should return the string 20 or Over
// Waiting:You should use the >= operator at least twice

// Setup
function testGreaterOrEqual(val) {
    if (val >= 20) {  // Check if val is greater than or equal to 20
      return "20 or Over";
    }
  
    if (val >= 10) {  // Check if val is greater than or equal to 10
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  
  // Example usage:
  console.log(testGreaterOrEqual(0));    // This should return "Less than 10"
  console.log(testGreaterOrEqual(9));    // This should return "Less than 10"
  console.log(testGreaterOrEqual(10));   // This should return "10 or Over"
  console.log(testGreaterOrEqual(11));   // This should return "10 or Over"
  console.log(testGreaterOrEqual(19));   // This should return "10 or Over"
  console.log(testGreaterOrEqual(100));  // This should return "20 or Over"
  console.log(testGreaterOrEqual(21));   // This should return "20 or Over"
  