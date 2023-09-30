// Use Destructuring Assignment to Assign Variables from Objects
// Destructuring allows you to assign a new variable name when extracting values. You can do this by putting the new name after a colon when assigning the value.

// Using the same object from the last example:

// const user = { name: 'John Doe', age: 34 };
// Here's how you can give new variable names in the assignment:

// const { name: userName, age: userAge } = user;
// You may read it as "get the value of user.name and assign it to a new variable named userName" and so on. The value of userName would be the string John Doe, and the value of userAge would be the number 34.

// Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables highToday and highTomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.

// Get Help
// Tests
// Waiting:You should remove the ES5 assignment syntax.
// Waiting:You should use destructuring to create the highToday variable.
// Waiting:You should use destructuring to create the highTomorrow variable.
// Waiting:highToday should be equal to 77 and highTomorrow should be equal to 80.

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Use destructuring with new variable names
  const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
  
  console.log(highToday); // 77
  console.log(highTomorrow); // 80
  