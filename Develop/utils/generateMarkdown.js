const http = require('http')
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {return ''}

  const options = {
    host: 'img.shields.io',
    path: '/static/v1?label=License&mesasge=${license}&color=success',
    port: 8080 
  }

  const req = http.get(options, res => {

    return (res)
  })
} 

// TODO: Create a function that returns the license link, this will be a link to the LICENSE file in the github repository.
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description  
  ${data.description}
  ## Installation 
  ${data.installation}
  ## Contributors 
  ${data.contribution}
  ## Test Cases 
  ${data.test}
  ## License 
  ${data.license}
`;
}

module.exports = generateMarkdown;

console.log(renderLicenseBadge('MIT'));