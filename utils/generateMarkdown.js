// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license){
    return '';
  }
  return `
  ##Liscense
  ${license}`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license){
    return ''
  }
  return
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license){
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {title, description, installation, credits, license, usage, tests, questions} = data;
  return `# ${title}

  ## Table Of Contents
  [description](link)
  [Installation](link)
  [Usage](link)
  [License](link)
  [Contributions](link)
  [Tests](link)
  [Questions](link)

  ## Description
  ${description} 

  ## Installation
  ${installation} 

  ## Credits
  ${credits} 

  ## License
  ${license} 
  ![badge](https://img.shields.io/badge/license-${license}-red)
  
  ## Tests
  ${tests}

  ## Usage
  ${usage} 

  ## Questions
  ${questions}
`;
}

module.exports = data => generateMarkdown(data);
