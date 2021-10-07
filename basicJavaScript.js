/*Initializing Variables with the Assignment OperatorPassed */
var a = 9;

/*Shopping List */
var myList = [];
myList.push(
  ["Chocolate Bar", 15],
  ["Banana", 2],
  ["Crocodile", 1],
  ["Ice-cream", 10],
  ["Spagetti", 3]
);

/*Passing Values to Functions with Arguments */
function functionWithArgs(a, b) {
  console.log(a + b);
}

functionWithArgs(20, 25);

/*Return a Value from a Function with Return */
function timesFive(num) {
  return num * 5;
}

/*Understanding Undefined Value returned from a Function */
// Setup
var sum = 0;

function addThree() {
  sum = sum + 3;
}

function addFive() {
  sum += 5;
}
addThree();
addFive();

/*Stand in Line */

function nextInLine(arr, item) {
  arr.push(item);
  return item;
}

var testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
