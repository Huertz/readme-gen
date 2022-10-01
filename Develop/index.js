// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
const generateReadme = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input

const userPrompt = () => {
    return inquirer.prompt([

        {
            type: 'input',
            name: 'title',
            message: 'Enter Project Title'
        },
        {
            type: 'input',
            name: 'userName',
            message: 'Enter Github User Name'
        },

        {
            type: 'input',
            name: 'email',
            message: 'Enter Email Address'
        },

        {
            type: 'input',
            name: 'description',
            message: 'Enter Project Description'
        },

        {
            type: 'input',
            name: 'instructions',
            message: 'Enter Instalation Instructions'
        },

        {
            type: 'input',
            name: 'usage',
            message: 'Enter Usage'
        },

        {
            type: 'list',
            name: 'license',
            message: 'Choose Type Of License',
            choices: ['MIT License', 'Mozila License',]
        },

        {
            type: 'input',
            name: 'contribution',
            message: 'Contribution'
        },
    ]);
}
const init = () => {
    userPrompt()
        .then((answers) => writeFile('README.md', generateReadme(answers)))
        .then(() => console.log('Successfully wrote to README.md'))
        .catch((err) => console.error(err));
};

init();






