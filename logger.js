// log.js
const jsome = require('jsome');
const { logSingleLine } = require("../singleLine");
const { logMultiLine } = require("../multiLine");

function log(input) {
  if ("object" === typeof input) {
    jsome(JSON.parse(JSON.stringify(input, null, 2)));
  } else if (input.includes("\n") || input.includes("\r")) {
    console.log(typeof input);
    logMultiLine(input);
  } else {
    logSingleLine(input);
  }
}

module.exports = { log };
/*
// ANCHOR - example usage
// const { log } = require("./lib/utils/console/logger");

// Example 1: Logging a simple string
log("Hello, world!");

// Example 2: Logging a multiline string
log(`This is a
multiline
string!`);

// Example 3: Logging an object
const myObject = {
  "foo": "bar",
  "baz": "qux",
  "listFoo": [ 1, 2, 3 ],
  "objFoo": {
    "foo2": "bar2",
    "listFoo": [ 1,2,3 ],
    "listBar": [
      "foo",
      "bar",
      "baz",
      "qux",
      "quux",
      "corge",
      "grault",
      "garply" 
    ]
  }
}

log(myObject);

// Example 4: Using log with a condition
const myBoolean = true;

if (myBoolean) {
  log("The condition is true!");
} else {
  log("The condition is false.");
}

// Example 5: Logging an error message with gradient color
const errorMessage = "Something went wrong!";

log(`ERROR: ${errorMessage}`);

// Example 6: Logging a success message with gradient color
const successMessage = "Task completed successfully!";

log(`SUCCESS: ${successMessage}`);

*/