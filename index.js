// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is your project description?',
        },
        {
            type: 'input',
            name: 'tableContents',
            message: 'Table of Contents for your README, if needed',
        },
        {
            type: 'input',
            name: 'install',
            message: 'How do you install your project?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Describe the usage for this application: ',
        },
        {
            type: 'input',
            name: 'license',
            message: 'Enter your License type (options: Apache, MIT, BSD3, BSD2)',
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Who are the contributors?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What tests are required and how do you run them?',
        },
        {
            type: 'input',
            name: 'contact',
            message: 'How to contact you with questions about the app?',
        },
    ])
}
    

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully created README!')
    );
}

// TODO: Create a function to initialize app
function init() { 
    promptUser()
    .then((answers) => {
        writeToFile("README.md", generateMarkdown(answers))

    });

}

// Function call to initialize app
init();
