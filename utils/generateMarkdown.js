
// key-value pairs to generate license badges from options provided to user (licenses used are the most common on Github according to Github data)
const licenses = {
  Apache: "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  BSD3: "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
  BSD2: "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
}

// function returns a badge that includes the license link in the badge
function renderLicenseBadge(license) {
  if(license == "") {
    return ""
  } else {
    return licenses[license]
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license == "") {
    return ""
  } else {
    return `This project is licensed under the ${license} license`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({ title, description, tableContents, install, usage, license, credits, tests, contact }) {
 return `# ${title}
 ${renderLicenseBadge(license)}


  ## Description

  ${description}
  
  ## Table of Contents

  ${tableContents}
  
  ## Installation

  ${install}
  
  ## Usage

  ${usage}
  
  ## License

  ${renderLicenseSection(license)}
  
  ## Credits

  ${credits}
  
  ## Tests
  
  ${tests}

  ## Contact Information

  ${contact}`

;
}

module.exports = generateMarkdown;
