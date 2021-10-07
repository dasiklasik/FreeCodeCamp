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

// Only change code below this line
function addFive() {
  sum += 5;
}

// Only change code above this line

addThree();
addFive();
