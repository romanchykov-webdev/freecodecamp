// Nesting For Loops
// If you have a multi-dimensional array, you can use the same logic as the prior waypoint to loop through both the array and any sub-arrays. Here is an example:

// const arr = [
//   [1, 2], [3, 4], [5, 6]
// ];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     console.log(arr[i][j]);
//   }
// }
// This outputs each sub-element in arr one at a time. Note that for the inner loop, we are checking the .length of arr[i], since arr[i] is itself an array.

// Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr.

// Get Help
// Tests
// Waiting:multiplyAll([[1], [2], [3]]) should return 6
// Waiting:multiplyAll([[1, 2], [3, 4], [5, 6, 7]]) should return 5040
// Waiting:multiplyAll([[5, 1], [0.2, 4, 0.5], [3, 9]]) should return 54


function multiplyAll(arr) {
    let product = 1;
  
    // Outer loop for iterating through sub-arrays
    for (let i = 0; i < arr.length; i++) {
      // Inner loop for iterating through elements in sub-array
      for (let j = 0; j < arr[i].length; j++) {
        product *= arr[i][j];
      }
    }
  
    return product;
  }
  
  // Test cases
  console.log(multiplyAll([[1], [2], [3]])); // Should return 6
  console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]])); // Should return 5040
  console.log(multiplyAll([[5, 1], [0.2, 4, 0.5], [3, 9]])); // Should return 54
  