// Profile Lookup
// We have an array of objects representing different people in our contacts lists.

// A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

// The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

// If both are true, then return the "value" of that property.

// If name does not correspond to any contacts then return the string No such contact.

// If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.

// Get Help
// Tests
// Waiting:lookUpProfile("Kristian", "lastName") should return the string Vos
// Waiting:lookUpProfile("Sherlock", "likes") should return ["Intriguing Cases", "Violin"]
// Waiting:lookUpProfile("Harry", "likes") should return an array
// Waiting:lookUpProfile("Bob", "number") should return the string No such contact
// Waiting:lookUpProfile("Bob", "potato") should return the string No such contact
// Waiting:lookUpProfile("Akira", "address") should return the string No such property


// Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].firstName === name) {
        if (contacts[i].hasOwnProperty(prop)) {
          return contacts[i][prop];
        } else {
          return "No such property";
        }
      }
    }
    return "No such contact";
  }
  
  // Test cases
  console.log(lookUpProfile("Kristian", "lastName")); // Should return "Vos"
  console.log(lookUpProfile("Sherlock", "likes")); // Should return ["Intriguing Cases", "Violin"]
  console.log(lookUpProfile("Harry", "likes")); // Should return an array
  console.log(lookUpProfile("Bob", "number")); // Should return "No such contact"
  console.log(lookUpProfile("Bob", "potato")); // Should return "No such contact"
  console.log(lookUpProfile("Akira", "address")); // Should return "No such property"
  
  
  lookUpProfile("Akira", "likes");