// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// const { inherits } = require('util');
const {writeFile} = require('fs').promises;
const {generateReadme} = require('./utils')
// TODO: Create an array of questions for user input

const init = async() => {
    try {
 const preguntas = await inquirer

inquirer.prompt ( [

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
        name: 'title',
        message: 'Enter Project Title'
    },

    {
        type: 'input',
        name: 'description',
        message: 'Enter Project Description'
    },
    
    {
        type: 'list',
        name: 'license',
        message: 'Choose Type Of License',
        choices: ['MIT License', 'None', ]
    },
    
    {
        type: 'input',
        name: 'title',
        message: 'Enter Instalation Instructions'
    },
    
    {
        type: 'input',
        name: 'title',
        message: 'Enter Usage'
    },
    
]);
// // TODO: Create a function to write README file
 await writeFile('README', generateReadme(preguntas));
console.log('File Was Created')
}catch(e){ 
    console.log(e)
}
}
// Function call to initialize app
init();






