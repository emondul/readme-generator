// Included packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const { generateReadMe } = require("./generateMarkdown");

// Created an array of questions for user input
inquirer
.prompt([
    {
        type: "input",
        message: "What's your name?",
        name: "name",
    },
    {
        type: "input",
        message: "What is your Github username?",
        name: "github",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    },
    {
        type: "input",
        message: "What is the name of your project?",
        name: "project",
    },
    {
        type: "input",
        message: "Write a short description of what your project is.",
        name: "description",
    },
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "install",
        default: "npm i",
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "tests",
        default: "npm test", 
    },
    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "usage",
    },
    {
        type: "list",
        message: "What kind of license do you want your project have?",
        name: "license",
        choices: ['MIT', 'Apache', 'BSD 3-Clause', 'GPL'],
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to the project?",
        name: "contribution",
    },
    
])
.then((data) => {
    fs.writeFile("generatedREADME.md", generateReadMe(data), (err) =>
    err ? console.error(err) : console.log('Successfully created readme file!')
    );
  })