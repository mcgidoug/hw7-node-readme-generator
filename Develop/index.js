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

  If you have any questions, please contact me through the following:

- Github: ${github}
  
- Email: ${email}
`;
}

// Bonus using writeFileSync as a promise
const init = () => {
  promptUser()
    // Use writeFileSync method to use promises instead of a callback function
    .then((answers) =>
      fs.writeFileSync("./generated.md", generateMarkdown(answers))
    )
    .then(() => console.log("Successfully wrote to generated.md?"))
    .catch((err) => console.error(err));
};

init();
