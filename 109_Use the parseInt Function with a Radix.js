// Use the parseInt Function with a Radix
// The parseInt() function parses a string and returns an integer. It takes a second argument for the radix, which specifies the base of the number in the string. The radix can be an integer between 2 and 36.

// The function call looks like:

// parseInt(string, radix);
// And here's an example:

// const a = parseInt("11", 2);
// The radix variable says that 11 is in the binary system, or base 2. This example converts the string 11 to an integer 3.

// Use parseInt() in the convertToInteger function so it converts a binary number to an integer and returns it.

// Get Help
// Tests
// Waiting:convertToInteger should use the parseInt() function
// Waiting:convertToInteger("10011") should return a number
// Waiting:convertToInteger("10011") should return 19
// Waiting:convertToInteger("111001") should return 57
// Waiting:convertToInteger("JamesBond") should return NaN

function convertToInteger(str) {
    // Use parseInt() with a radix of 2 to convert the binary number to an integer
    const result = parseInt(str, 2);
  
    // Return the integer result
    return result;
  }
  
  // Test the function
  console.log(convertToInteger("10011")); // This will print 19
  console.log(convertToInteger("111001")); // This will print 57
  console.log(convertToInteger("JamesBond")); // This will print NaN
  