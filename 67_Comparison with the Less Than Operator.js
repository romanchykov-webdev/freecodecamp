// Comparison with the Less Than Operator
// The less than operator (<) compares the values of two numbers. If the number to the left is less than the number to the right, it returns true. Otherwise, it returns false. Like the equality operator, the less than operator converts data types while comparing.

// Examples

// 2   < 5 // true
// '3' < 7 // true
// 5   < 5 // false
// 3   < 2 // false
// '8' < 4 // false
// Add the less than operator to the indicated lines so that the return statements make sense.

// Get Help
// Tests
// Waiting:testLessThan(0) should return the string Under 25
// Waiting:testLessThan(24) should return the string Under 25
// Waiting:testLessThan(25) should return the string Under 55
// Waiting:testLessThan(54) should return the string Under 55
// Waiting:testLessThan(55) should return the string 55 or Over
// Waiting:testLessThan(99) should return the string 55 or Over
// Waiting:You should use the < operator at least twice

// Setup
function testLessThan(val) {
    if (val < 25) {  // Check if val is less than 25
      return "Under 25";
    }
  
    if (val < 55) {  // Check if val is less than 55
      return "Under 55";
    }
  
    return "55 or Over";
  }
  
  // Example usage:
  console.log(testLessThan(0));    // This should return "Under 25"
  console.log(testLessThan(24));   // This should return "Under 25"
  console.log(testLessThan(25));   // This should return "Under 55"
  console.log(testLessThan(54));   // This should return "Under 55"
  console.log(testLessThan(55));   // This should return "55 or Over"
  console.log(testLessThan(99));   // This should return "55 or Over"
  