// Global vs. Local Scope in Functions
// It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.

// In this example:

// const someVar = "Hat";

// function myFun() {
//   const someVar = "Head";
//   return someVar;
// }
// The function myFun will return the string Head because the local version of the variable is present.

// Add a local variable to myOutfit function to override the value of outerWear with the string sweater.

// Get Help
// Tests
// Waiting:You should not change the value of the global outerWear.
// Waiting:myOutfit should return the string sweater.
// Waiting:You should not change the return statement.

// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Declare a local variable outerWear with the value "sweater"
  const outerWear = "sweater";

  // Return the local variable's value
  return outerWear;
}

// Testing the function
console.log(myOutfit()); // This should print "sweater"
console.log(outerWear);  // This should still be "T-Shirt"
