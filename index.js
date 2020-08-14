const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const questions = [
  //   Title
  {
    message: "What is the title of your Repo?",
    name: "title",
  },
  //   Description
  {
    message: "What is the description of your Repo?",
    name: "description",
  },
  //   Installation
  {
    message: "What are the installation instructions for your Repo?",
    name: "installation",
  },
  //   Usage
  {
    message: "Please provide an example of the code's usage?",
    name: "usage",
  },
  //   License
  {
    type: "list",
    message: "What is the license of your Repo?",
    name: "license",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  //   Contributing
  {
    message: "Please explain how to contribute to your Repo?",
    name: "contributing",
  },
  //   Tests
  {
    message: "Please explain how to test your Repo?",
    name: "tests",
  },
  //   Questions - GitHub Username
  {
    message: "What is your GitHub username?",
    name: "userName",
  },
  //     User GitHub email
  {
    message: "What is your email Address?",
    name: "userEmail",
  },
];

function writeToFile(fileName, data) {
  return fs.writeFileSync(fileName, data);
}

async function init() {
  const data = await inquirer.prompt(questions);
  console.log(data);

  writeToFile("README.md", await generateMarkdown(data));
}

init();
