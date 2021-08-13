// TODO: Create a .gitignore file and include node_modules/ and .DS_Store/ so that your node_modules directory isn't tracked or uploaded to GitHub.

// include node fs module
var fs = require("fs");

// writeFile function with filename, content and callback function
fs.writeFile(".gitignore.txt", "", function (err) {
  if (err) throw err;
  console.log("File is created successfully.");
});

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
