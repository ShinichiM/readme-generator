// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (!data.license) {return ''}
  
  return `https://img.shields.io/github/license/${data.contact}/${data.title}.svg?style=flat-square`;
} 

// TODO: Create a function that returns the license link, this will be a link to the LICENSE file in the github repository.
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (!data.license) {return ''} 
  return (`https://github.com/${data.contact}/${data.title}/blob/main/LICENSE.txt`);
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (!data.license) {return ''}

  return `# License 
  This application is licensed under ${data.license} [![License Badge](${renderLicenseBadge(data)})](${renderLicenseLink(data)})
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # Table of Contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributors](#Contributors)
  - [Tests](#Test-Cases)
  - [Questions](#Questions)
  # Description  
  ${data.description}
  # Installation  
  ${data.installation}
  # Usage
  ${data.usage}
  ${renderLicenseSection(data)}
  # Contributors   
  ${data.contribution}
  # Test-Cases 
  ${data.test}
  # Questions
  [${data.contact}]('https://github.com/${data.contact}')
  ${data.contact2}
`;
}

module.exports = generateMarkdown;