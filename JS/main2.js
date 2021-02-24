function saySomething(phrase) {
  console.log("You said: " + phrase);
}

saySomething("I will retire with the crown, YES");

function getPhraseLength(phrase) {
  var l = phrase.length;
  return l;
}

var pLength = getPhraseLength("Thisoneisfortheboyswiththeboominsystem");

console.log(pLength);

var numbers = [1, 4, 12, 465, 7, 2, 5, 423, 464];
var words = ["apple", "me", "bee", "you"];

// using .sort() will sort alphabetically, not for numbers

// how to sort array of numbers from lowest to highest

console.log(
  numbers.sort(function (a, b) {
    return a - b;
  })
);

// finding the missing number

var num = [
  19,
  15,
  16,
  0,
  20,
  3,
  4,
  5,
  7,
  11,
  1,
  2,
  12,
  6,
  13,
  17,
  18,
  8,
  9,
  10,
];

// console.log(num.length); // 20, should be 21 if counting missing number
// missing -1 is the default state
// create loop using lowest number in the array
// The indexOf() method returns the position of the first occurrence of a specified value in a string/array.
// method returns -1 if the value to search for never occurs

function missingNumber(num) {
  var missing = -1;

  for (var i = 0; i <= num.length - 1; i++) {
    if (num.indexOf(i) === -1) {
      missing = i;
    }
  }
  return missing;
}

console.log(missingNumber(num));
