// Stand in Line
// In Computer Science a queue is an abstract Data Structure where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue.

// Write a function nextInLine which takes an array (arr) and a number (item) as arguments.

// Add the number to the end of the array, then remove the first element of the array.

// The nextInLine function should then return the element that was removed.

// Get Help
// Tests
// Waiting:nextInLine([], 5) should return a number.
// Waiting:nextInLine([], 1) should return 1
// Waiting:nextInLine([2], 1) should return 2
// Waiting:nextInLine([5,6,7,8,9], 1) should return 5
// Waiting:After nextInLine(testArr, 10), testArr[4] should be 10


function nextInLine(arr, item) {
    // Add the item to the end of the array
    arr.push(item);
    
    // Remove the first element and return it
    return arr.shift();
  }
  
  // Setup
  let testArr = [1, 2, 3, 4, 5];
  
  // Example usage:
  console.log(nextInLine([], 5)); // This should return 5
  console.log(nextInLine([], 1)); // This should return 1
  console.log(nextInLine([2], 1)); // This should return 2
  console.log(nextInLine([5, 6, 7, 8, 9], 1)); // This should return 5
  
  // After adding 10 to the testArr
  nextInLine(testArr, 10);
  console.log(testArr[4]); // This should be 10
  