// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None')
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  return '';
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None')
    return `- [License](#license)`;
  return '';
}

// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') 
    return `## License\nThis project is licensed under the ${license} license.`;
    return '';
}

function generateMarkdown({ title, instructions, license, userName, description, usage, test, email, contribution }) {
  return `# ${title}

${renderLicenseBadge(license)}

  ## Description

  Short description of the project: 

  ${description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  ${renderLicenseLink(license)}
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation

  To install necessary dependencies, run the following command: 

  ${instructions} 

  ## Usage

  ${usage}

  ${renderLicenseSection(license)}

  ## Contributing 

  ${contribution}
  
  ## Tests

  To run the code, run the follwing command:

  ${test}

  ## Questions

  If you want to view more projects. Your are welcome to visit me at https://github.com/${userName}

  If you have addition question you can email me at ${email}@yahoo.com 
`;
}

module.exports = generateMarkdown;
