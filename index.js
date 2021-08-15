// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "username",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your GitHub email address?",
  },
  {
    type: "input",
    name: "title",
    message: "What is your project's name?",
  },
  {
    type: "input",
    name: "description",
    message: "Please write a short description of your project.",
  },
  {
    type: "input",
    name: "license",
    message: "What of license should your project have?",
    choices: ["Apache 2.0", "MIT", "Boost 1.0", "BSD 3", "Eclipse 1.0"],
  },
  {
    type: "input",
    name: "dependencies",
    message: "What command should be run to install dependencies?",
    default: "npm i",
  },
  {
    type: "input",
    name: "test",
    message: "What command should be run to run tests?",
    default: "npm test",
  },
  {
    type: "input",
    name: "usage",
    message: "What does the user need to know about using the repo?",
  },
  {
    type: "input",
    name: "contributors",
    message: "What does the user need to know about contributing to the repo?",
  },
  {
    type: "input",
    name: "credit",
    message:
      "List your collaborators if you used any third-party assets that require attribution.",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err
      ? console.log(err)
      : console.log("Your ReadME file was generated successfully!")
  );
}

// TODO: Create a function to initialize app
function init() {
  console.log("Hello, lets create your Readme!");
  inquirer.prompt(questions).then(function (data) {
    writeToFile("README.md", generateMarkdown(data));
  });
}

// Function call to initialize app
init();
