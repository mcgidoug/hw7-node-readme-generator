// Packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
// An array of questions for user input
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "list",
      name: "license",
      message: "What license does your project use?",
      choices: ["None", "Apache 2.0", "MIT", "GPL v3.0"],
    },
    {
      type: "input",
      name: "installation",
      message: "What steps are needed to install your project?",
    },
    {
      type: "input",
      name: "contributions",
      message: "What guidelines must others follow in order to contribute?",
    },
    {
      type: "input",
      name: "usage",
      message: "How do you intend on using this program?",
    },
    {
      type: "input",
      name: "tests",
      message: "How do you test this project?",
    },
    {
      type: "input",
      name: "github",
      message: "What is your GitHub username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
    },
    {
      type: "input",
      name: "linkedin",
      message: "What is your LinkedIn?",
    },
  ]);
};
// function to generate markdown file with user answers
function generateMarkdown({
  title,
  license,
  installation,
  contributions,
  tests,
  github,
  email,
  linkedin,
  usage,
}) {
  return `
  ${createLicenseBadge(license)}
  ${createLicenseLink(license)}
  ## Table of Contents:

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributors](#contributors)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation:

  ${installation}
  

  ## Usage:

  ${usage}

  ## Contributors:

  ${contributions}

  ## Tests:
  
  ${tests}

  ## Questions:

- Github: ${github}
  
- Email: ${email}
`;
}

// function for appending user input to markdown file
const init = () => {
  promptUser()
    .then((answers) =>
      fs.writeFileSync("./generated.md", generateMarkdown(answers))
    )
    .then(() => console.log("Successfully wrote to generated.md"))
    .catch((err) => console.error(err));
};
// calls function to append user input to markdown file
init();
// function to generate license badge
function createLicenseBadge(license) {
  let badge = "";
  if (license === "MIT") {
    badge =
      "![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)";
  } else if (license === "Apache 2.0") {
    badge =
      "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
  } else if (license === "GPL v3.0") {
    badge =
      "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
  } else {
    badge = "";
  }
  return badge;
}
// function to generate license link
function createLicenseLink(license) {
  let licenseLink = "";
  if (license === "MIT") {
    licenseLink = "https://choosealicense.com/licenses/mit/";
  } else if (license === "Apache 2.0") {
    licenseLink = "http://www.apache.org/licenses/LICENSE-2.0";
  } else if (license === "GPL v3.0") {
    licenseLink = "https://www.gnu.org/licenses";
  } else {
    licenseLink = "";
  }
  return licenseLink;
}
