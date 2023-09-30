// Use Recursion to Create a Range of Numbers
// Continuing from the previous challenge, we provide you another opportunity to create a recursive function to solve a problem.

// We have defined a function named rangeOfNumbers with two parameters. The function should return an array of integers which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter. The starting number will always be less than or equal to the ending number. Your function must use recursion by calling itself and not use loops of any kind. It should also work for cases where both startNum and endNum are the same.

// Get Help
// Tests
// Waiting:Your function should return an array.
// Waiting:Your code should not use any loop syntax (for or while or higher order functions such as forEach, map, filter, or reduce).
// Waiting:rangeOfNumbers should use recursion (call itself) to solve this challenge.
// Waiting:rangeOfNumbers(1, 5) should return [1, 2, 3, 4, 5].
// Waiting:rangeOfNumbers(6, 9) should return [6, 7, 8, 9].
// Waiting:rangeOfNumbers(4, 4) should return [4].
// Waiting:Global variables should not be used to cache the array.


function rangeOfNumbers(startNum, endNum) {
    if (startNum === endNum) {
      return [startNum];
    } else {
      const numbers = rangeOfNumbers(startNum, endNum - 1);
      numbers.push(endNum);
      return numbers;
    }
  }
  
  // Test the function
  console.log(rangeOfNumbers(1, 5)); // This will return [1, 2, 3, 4, 5]
  console.log(rangeOfNumbers(6, 9)); // This will return [6, 7, 8, 9]
  console.log(rangeOfNumbers(4, 4)); // This will return [4]
  