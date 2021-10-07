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
  item = arr.shift();
  return item;
}

/*Use Conditional Logic with If Statements */
function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, that was true";
  } else {
    return "No, that was false";
  }
}

/*Comparison with the Equality Operator */
// Setup
function testEqual(val) {
  if (val == 12) {
    return "Equal";
  }
  return "Not Equal";
}

/*Practice comparing different values */
function compareEquality(a, b) {
  if (a === b) {
    return "Equal";
  }
  return "Not Equal";
}

/*Comparison with the Greater Than Operator */
function testGreaterThan(val) {
  if (val > 100) {
    return "Over 100";
  }

  if (val > 10) {
    return "Over 10";
  }

  return "10 or Under";
}

/*Comparison with the Greater Than Or Equal To Operator */
function testGreaterOrEqual(val) {
  if (val >= 20) {
    return "20 or Over";
  }

  if (val >= 10) {
    return "10 or Over";
  }

  return "Less than 10";
}

/*Comparison with the Less Than Operator */

function testLessThan(val) {
  if (val < 25) {
    return "Under 25";
  }

  if (val < 55) {
    return "Under 55";
  }

  return "55 or Over";
}

/*Comparison with the Less Than Or Equal To Operator */

function testLessOrEqual(val) {
  if (val <= 12) {
    return "Smaller Than or Equal to 12";
  }

  if (val <= 12) {
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

/*Comparisons with the Logical And Operator */
function testLogicalAnd(val) {
  if (val <= 50 && val >= 25) {
    return "Yes";
  }

  return "No";
}

/*Comparisons with the Logical Or Operator */
function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    return "Outside";
  }

  return "Inside";
}
