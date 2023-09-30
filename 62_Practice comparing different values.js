// Practice comparing different values
// In the last two challenges, we learned about the equality operator (==) and the strict equality operator (===). Let's do a quick review and practice using these operators some more.

// If the values being compared are not of the same type, the equality operator will perform a type conversion, and then evaluate the values. However, the strict equality operator will compare both the data type and value as-is, without converting one type to the other.

// Examples

// 3 == '3' returns true because JavaScript performs type conversion from string to number. 3 === '3' returns false because the types are different and type conversion is not performed.

// Note: In JavaScript, you can determine the type of a variable or a value with the typeof operator, as follows:

// typeof 3
// typeof '3'
// typeof 3 returns the string number, and typeof '3' returns the string string.

// The compareEquality function in the editor compares two values using the equality operator. Modify the function so that it returns the string Equal only when the values are strictly equal.

// Get Help
// Tests
// Waiting:compareEquality(10, "10") should return the string Not Equal
// Waiting:compareEquality("20", 20) should return the string Not Equal
// Waiting:You should use the === operator

// Setup
function compareEquality(a, b) {
    if (a === b) { // Use the strict equality operator (===) to check for strict equivalence
      return "Equal";
    }
    return "Not Equal";
  }
  
  // Example usage:
  console.log(compareEquality(10, "10")); // This should return "Not Equal"
  console.log(compareEquality("20", 20)); // This should return "Not Equal"
  