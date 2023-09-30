// Use Destructuring Assignment to Extract Values from Objects
// Destructuring assignment is special syntax introduced in ES6, for neatly assigning values taken directly from an object.

// Consider the following ES5 code:

// const user = { name: 'John Doe', age: 34 };

// const name = user.name;
// const age = user.age;
// name would have a value of the string John Doe, and age would have the number 34.

// Here's an equivalent assignment statement using the ES6 destructuring syntax:

// const { name, age } = user;
// Again, name would have a value of the string John Doe, and age would have the number 34.

// Here, the name and age variables will be created and assigned the values of their respective values from the user object. You can see how much cleaner this is.

// You can extract as many or few values from the object as you want.

// Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables today and tomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.

// Get Help
// Tests
// Waiting:You should remove the ES5 assignment syntax.
// Waiting:You should use destructuring to create the today variable.
// Waiting:You should use destructuring to create the tomorrow variable.
// Waiting:today should be equal to 77 and tomorrow should be equal to 80.


const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Use destructuring to create the today and tomorrow variables
  const { today, tomorrow } = HIGH_TEMPERATURES;
  
  console.log(today); // 77
  console.log(tomorrow); // 80
  