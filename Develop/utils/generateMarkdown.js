// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(user, repository) {
  if (!license) {return ''}

  return 'https://img.shields.io/github/license/${user}/${repository}.svg?style=flat-square';
} 

// TODO: Create a function that returns the license link, this will be a link to the LICENSE file in the github repository.
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {return ''}

  return `# License 
  ${data.license} ![License Badge](${renderLicenseBadge(data.user, data.contact)}) `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # Description  
  ${data.description}
  # Table of Contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributors](#Contributors)
  - [Tests](#Test-Cases)
  - [Questions](#Questions)
  # Installation  
  ${data.installation}
  # Usage
  ${data.usage}
  ${renderLicenseSection(data.license)}
  # Contributors   
  ${data.contribution}
  # Test-Cases 
  ${data.test}
  # Questions
  ${data.contact}
`;
}

module.exports = generateMarkdown;

console.log(renderLicenseBadge('MIT'));