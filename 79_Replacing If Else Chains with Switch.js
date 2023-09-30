// Replacing If Else Chains with Switch
// If you have many options to choose from, a switch statement can be easier to write than many chained if/else if statements. The following:

// if (val === 1) {
//   answer = "a";
// } else if (val === 2) {
//   answer = "b";
// } else {
//   answer = "c";
// }
// can be replaced with:

// switch (val) {
//   case 1:
//     answer = "a";
//     break;
//   case 2:
//     answer = "b";
//     break;
//   default:
//     answer = "c";
// }
// Change the chained if/else if statements into a switch statement.

// Get Help
// Tests
// Waiting:You should not use any else statements anywhere in the editor
// Waiting:You should not use any if statements anywhere in the editor
// Waiting:You should have at least four break statements
// Waiting:chainToSwitch("bob") should return the string Marley
// Waiting:chainToSwitch(42) should return the string The Answer
// Waiting:chainToSwitch(1) should return the string There is no #1
// Waiting:chainToSwitch(99) should return the string Missed me by this much!
// Waiting:chainToSwitch(7) should return the string Ate Nine
// Waiting:chainToSwitch("John") should return "" (empty string)
// Waiting:chainToSwitch(156) should return "" (empty string)

function chainToSwitch(val) {
    let answer = "";
  
    switch (val) {
      case "bob":
        answer = "Marley";
        break;
      case 42:
        answer = "The Answer";
        break;
      case 1:
        answer = "There is no #1";
        break;
      case 7:
        answer = "Ate Nine";
        break;
      case 99:
        answer = "Missed me by this much!";
        break;
      default:
        answer = "";
    }
  
    return answer;
  }
  