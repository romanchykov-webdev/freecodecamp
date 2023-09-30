// Comparison with the Greater Than Operator
// The greater than operator (>) compares the values of two numbers. If the number to the left is greater than the number to the right, it returns true. Otherwise, it returns false.

// Like the equality operator, the greater than operator will convert data types of values while comparing.

// Examples

// 5   >  3  // true
// 7   > '3' // true
// 2   >  3  // false
// '1' >  9  // false
// Add the greater than operator to the indicated lines so that the return statements make sense.

// Get Help
// Tests
// Waiting:testGreaterThan(0) should return the string 10 or Under
// Waiting:testGreaterThan(10) should return the string 10 or Under
// Waiting:testGreaterThan(11) should return the string Over 10
// Waiting:testGreaterThan(99) should return the string Over 10
// Waiting:testGreaterThan(100) should return the string Over 10
// Waiting:testGreaterThan(101) should return the string Over 100
// Waiting:testGreaterThan(150) should return the string Over 100
// Waiting:You should use the > operator at least twice


// Setup
function testGreaterThan(val) {
    if (val > 100) {  // Check if val is greater than 100
      return "Over 100";
    }
  
    if (val > 10) {  // Check if val is greater than 10
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  // Example usage:
  console.log(testGreaterThan(0));    // This should return "10 or Under"
  console.log(testGreaterThan(10));   // This should return "10 or Under"
  console.log(testGreaterThan(11));   // This should return "Over 10"
  console.log(testGreaterThan(99));   // This should return "Over 10"
  console.log(testGreaterThan(100));  // This should return "Over 10"
  console.log(testGreaterThan(101));  // This should return "Over 100"
  console.log(testGreaterThan(150));  // This should return "Over 100"
  