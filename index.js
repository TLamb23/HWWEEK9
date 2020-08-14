const inquirer = require("inquirer");
<<<<<<< HEAD
const axios = require("axios");
const fs = require('fs');
const path = require('path');
async function main(){
    console.log(`starting`);
    const userResponse = await inquirer
    .prompt([
        {
            type: "input",
            message: "What is your GitHub user name?",
            name: "username"
        },
        {
            type: "input",
            message: "What is your Project Title?",
            name: "projectTittle"
        },
        {
            type: "input",
            message: "Provide detail description",
            name: "projectDescription"
        },
        {
            type: "input",
            message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
            name: "installationProcess"
        },
        {
            type: "input",
            message: "Provide instructions for use.",
            name: "instruction"
        },
        {
            type: "input",
            message: "Provide instructions examples for use.",
            name: "instructionExample"
        },
        {
            type: "input",
            message: "provide License name ",
            name: "licenseName"
        },
        {
            type: "input",
            message: "provide License url ",
            name: "licenseUrl"
        },
        {
            type: "input",
            message: "please enter git hub user names of the contributor if any (If there are mulitple contributor, seperate names with comma and no space! )",
            name: "contributorsGitUserName"
        },
        {
            type: "input",
            message: "Provide examples on how to run tests.",
            name: "tests"
        }
        ]);
        console.log(`starting`);
        console.log(userResponse);
        const gitUsername = userResponse.username;
        const projectTittle = userResponse.projectTittle;
        const projectDescription = userResponse.projectDescription;
        const installationProcess = userResponse.installationProcess;
        const instruction = userResponse.instruction;
        const instructionExample = userResponse.instructionExample;
        const licenseName = userResponse.licenseName;
        const licenseUrl = userResponse.licenseUrl;
        const contributorUserNames = userResponse.contributorsGitUserName;
        const tests = userResponse.tests;
            // fetching data from git
            // user
        const gitResponse = await axios.get(`https://api.github.com/users/${gitUsername}`);
        const gitData = gitResponse.data;
        const gitName = gitData.login;
        const gitEmail = gitData.email;
        const gitlocation = gitData.location;
        const gitUrl = gitData.html_url;
        const gitProfileImage = gitData.avatar_url;
            // contributor
        const contributorUserNamesArray = contributorUserNames.split(",");
        console.log(contributorUserNamesArray);
        // const  = listOfContributorsUserNames.
        // contributorsGitUserName
        var resultContributor;
        for (i=0; i<contributorUserNamesArray.length; i++){
            var contributorsGitUserName = contributorUserNamesArray[i]
            const gitResponse2 = await axios.get(`https://api.github.com/users/${contributorsGitUserName}`);
            var gitContribuProfileImage = gitResponse2.data.avatar_url;
            var gitContribuUrl = gitResponse2.data.html_url;
            var gitContribuEmail = gitResponse2.data.email;
            var resultContributor = resultContributor + (`
            \n <img src="${gitContribuProfileImage}" alt="drawing" width="150" display="inline"/> ${contributorsGitUserName}  GitHubLink: ${gitContribuUrl}`);
        }
        var result = (`
# ${projectTittle} 
${projectDescription}
\n* [Installation](#Installation)
\n* [Instructions](#Instructions)
\n* [License](#License)
\n* [Contributors](#Contributors)
\n* [Author](#Author)
\n* [Tests](#Tests)
## Installation
${installationProcess}
## Instructions
${instruction}
\`\`\`
${instructionExample}
\`\`\`
## License 
This project is licensed under the ${licenseName} - see the ${licenseUrl} file for details
## Contributors
${resultContributor}
## Tests
${tests}
## Author 
\n![ProfileImage](${gitProfileImage})
\n**${gitName}**
\nEmail: ${gitEmail}
\nLocation:${gitlocation}
\nGitHub: ${gitUrl}
`)
var writeResult = fs.writeFileSync(path.join(__dirname, '../GoodReadMeGenerator', 'readMe.md'), result )
console.log("file generated....")
    }
main();
=======
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
  console.log("file generated...")
}

init();
>>>>>>> 7a3ff16644f757d7c6a93599b55ae6ad5f07a78e
