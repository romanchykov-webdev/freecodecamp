// Generate Random Fractions with JavaScript
// Random numbers are useful for creating random behavior.

// JavaScript has a Math.random() function that generates a random decimal number between 0 (inclusive) and 1 (exclusive). Thus Math.random() can return a 0 but never return a 1.

// Note: Like Storing Values with the Assignment Operator, all function calls will be resolved before the return executes, so we can return the value of the Math.random() function.

// Change randomFraction to return a random number instead of returning 0.

// Get Help
// Tests
// Waiting:randomFraction should return a random number.
// Waiting:The number returned by randomFraction should be a decimal.
// Waiting:You should be using Math.random to generate the random decimal number.

function randomFraction() {
    // Generate a random decimal number between 0 (inclusive) and 1 (exclusive)
    return Math.random();
  }
  
  // Test the function
  console.log(randomFraction()); // This will print a random decimal number between 0 and 1
  