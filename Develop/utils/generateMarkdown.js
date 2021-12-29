// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link, this will be a link to the LICENSE file in the github repository.
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## ${data.description}
  Stuff
  ## ${data.installation}
  More Stuff
  ## ${data.contribution}
  Even More Stuff
  ## ${data.test}
  How Much Stuff
  ## ${data.license}
  Last Stuff
`;
}

module.exports = generateMarkdown;
