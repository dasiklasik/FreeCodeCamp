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

/*Chaining If Else Statements */
function testSize(num) {
  // Only change code below this line
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else if (num >= 20) {
    return "Huge";
  }

  return "Change Me";
}

/*Golf Code */
var names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];
function golfScore(par, strokes) {
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes == par - 1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  } else if (strokes >= par + 3) {
    return names[6];
  }

  return "Change Me";
}

/*Selecting from Many Options with Switch Statements */
function caseInSwitch(val) {
  var answer = "";
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }
  return answer;
}

/*Adding a Default Option in Switch Statements */
function switchOfStuff(val) {
  var answer = "";
  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
      break;
  }

  return answer;
}

/*Multiple Identical Options in Switch Statements */
function sequentialSizes(val) {
  var answer = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }

  return answer;
}

/*Replacing If Else Chains with Switch */
function chainToSwitch(val) {
  var answer = "";
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
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
  }

  return answer;
}

/*Returning Boolean Values from Functions */
function isLess(a, b) {
  return a < b;
}

/*Return Early Pattern for Functions */
function abTest(a, b) {
  if (a < 0 || b < 0) {
    return undefined;
  }

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

/*Counting Cards */
var count = 0;

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count += 1;
      break;
    case 7:
    case 8:
    case 9:
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count -= 1;
      break;
  }
  let res = "";

  if (count > 0) {
    res = "Bet";
  } else {
    res = "Hold";
  }

  return count + " " + res;
}

/*Build JavaScript Objects */
var myDog = {
  name: "Harry",
  legs: 4,
  tails: 1,
  friends: ["Henry", "Dasha", "Mom"],
};

/*Accessing Object Properties with Variables */
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas",
};

var playerNumber = 16;
var player = testObj[playerNumber];

/*Updating Object Properties */

var myDog = {
  name: "Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
};

myDog["name"] = "Happy Coder";

/*Using Objects for Lookups */

function phoneticLookup(val) {
  var result = "";

  var lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
  };

  result = lookup[val];

  return result;
}

/*Testing Objects for Properties */
function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}

/*Manipulating Complex Objects */

var myMusic = [
  {
    artist: "Billy Joel",
    title: "Piano Man",
    release_year: 1973,
    formats: ["CD", "8T", "LP"],
    gold: true,
  },

  {
    artist: "test",
    title: "test",
    release_year: 2021,
    formats: ["CD", "8T", "LP"],
  },
];
