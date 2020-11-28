const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "what is your project title?",
      name: "titleInput",
    },
    {
      type: "input",
      message: "description?",
      name: "descriptionInput",
    },
    {
      type: "input",
      message: "installation instructions?",
      name: "installInput",
    },
    {
      type: "input",
      message: "usage information?",
      name: "usuageInput",
    },
    {
      type: "input",
      message: "contribution guidelines",
      name: "contributionInput",
    },
  ])
  .then((res) => {
    console.log(res);

    // const readMeFormat = `
    //     #Description
    //     ${res.descriptionInput}
    //     #Table of Contents
    //     #Installation
    //     ${res.installInput}
    //     #Usage
    //     ${res.usuageInput}
    //     #License
    //     #Contributing
    //     ${res.contributionInput}
    //     #Tests
    //     #Questions`;

    fs.writeFile("README.md", returnRes(res), (err) =>
      err ? console.error(err) : console.log("Success!")
    );
  });

function returnRes(res) {
  return `#Description
${res.descriptionInput}
#Table of Contents
#Installation
${res.installInput}
#Usage
${res.usuageInput}
#License
#Contributing
${res.contributionInput}
#Tests
#Questions`;
}

// Given Starter CODE
// // array of questions for user
// const questions = [

// ];

// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
