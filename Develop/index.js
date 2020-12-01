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
    {
      type: "input",
      message: "what is your github username",
      name: "githubInput",
    },
    {
      type: "input",
      message: "what is your email address",
      name: "emailInput",
    },
    {
      type: "list",
      message: "choose a license",
      name: "licenseInput",
      choices: [
        "IBM Public License Version 1.0",
        "ISC License (ISC)",
        "The MIT License",
        "Mozilla Public License 2.0",
      ],
    },
  ])
  .then((res) => {
    console.log(res);

    let returnLicense;

    if (res.licenseInput == "IBM Public License Version 1.0") {
      returnLicense =
        "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
    } else if (res.licenseInput == "ISC License (ISC)") {
      returnLicense =
        "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
    } else if (res.licenseInput == "The MIT License") {
      returnLicense =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (res.licenseInput == "Mozilla Public License 2.0") {
      returnLicense =
        "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    }

    const readMeFormat = `
# Description 
${res.descriptionInput}
# Table of Contents
1. Description
2. Installation
3. Usage
4. License
5. Contributing
6. Tests
7. Questions

# Installation
${res.installInput}
# Usage
${res.usuageInput}
# License
${returnLicense}
# Contributing
${res.contributionInput}
# Tests
# Questions
Github username: ${res.githubInput}

For a look at my repositories click this link: https://github.com/${res.githubInput}

You can reach me at my email address: ${res.emailInput}, if you have any questions at all!`;

    fs.writeFile("README.md", readMeFormat, (err) =>
      err ? console.error(err) : console.log("Success!")
    );
  });
