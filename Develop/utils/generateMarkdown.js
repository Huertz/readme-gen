// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({title, instructions, license, userName, description, usage, test, emial, contribution}) {
  return `# ${title}
  # <Your-Project-Title>

  ## Description

  Short description of the project: 

  ${description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation

  To install necessary dependencies, run the following command: 

  ${instructions} 

  ## Usage

  ${usage}
  
  ## License

  This project is under the ${license} 

  ## Contributing 

  ${contribution}
  
  ## Tests

  To run the code, run the follwing command:

  ${test}

  ## Questions

  If you want to view more projects. Your are welcome to visit me at https://github.com/${userName}

  If you have addition question you can email me at ${emial}@yahoo.com 
`;
}

module.exports = generateMarkdown;
