// Comparison with the Inequality Operator
// The inequality operator (!=) is the opposite of the equality operator. It means not equal and returns false where equality would return true and vice versa. Like the equality operator, the inequality operator will convert data types of values while comparing.

// Examples

// 1 !=  2    // true
// 1 != "1"   // false
// 1 != '1'   // false
// 1 != true  // false
// 0 != false // false
// Add the inequality operator != in the if statement so that the function will return the string Not Equal when val is not equivalent to 99.

// Get Help
// Tests
// Waiting:testNotEqual(99) should return the string Equal
// Waiting:testNotEqual("99") should return the string Equal
// Waiting:testNotEqual(12) should return the string Not Equal
// Waiting:testNotEqual("12") should return the string Not Equal
// Waiting:testNotEqual("bob") should return the string Not Equal
// Waiting:You should use the != operator

// Setup
function testNotEqual(val) {
    if (val != 99) { // Use the inequality operator (!=) to check if val is not equivalent to 99
      return "Not Equal";
    }
    return "Equal";
  }
  
  // Example usage:
  console.log(testNotEqual(99));   // This should return "Equal"
  console.log(testNotEqual("99")); // This should return "Equal"
  console.log(testNotEqual(12));   // This should return "Not Equal"
  console.log(testNotEqual("12")); // This should return "Not Equal"
  console.log(testNotEqual("bob")); // This should return "Not Equal"
  