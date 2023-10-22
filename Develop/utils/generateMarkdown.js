// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {}
function getLicenseBadge(license) {
  if (!license) {
    return '';
  }

  const licenses = {
    mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    apache: '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    gpl: '[![License: GPL 3.0](https://img.shields.io/badge/License-GPL%203.0-blue.svg)](https://opensource.org/licenses/GPL-3.0)',
    bsd: '[![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
    none: '', // You can add more licenses and badges as needed
  };

  return licenses[license.toLowerCase()] || '';
}

// Example usage:
const badge = getLicenseBadge('MIT');
console.log(badge); 
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}
function getLicenseLink(license) {
  if (!license) {
    return '';
  }

  const licenseLinks = {
    mit: 'https://opensource.org/licenses/MIT',
    apache: 'https://opensource.org/licenses/Apache-2.0',
    gpl: 'https://opensource.org/licenses/GPL-3.0',
    bsd: 'https://opensource.org/licenses/BSD-3-Clause',
    // Add more licenses and their links as needed
  };

  const normalizedLicense = license.toLowerCase();
  return licenseLinks[normalizedLicense] || '';
}

// Example usage:
const licenseLink = getLicenseLink('MIT');
console.log(licenseLink);

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

function generateLicenseSection(license) {
  if (!license) {
    return '';
  }

  const licenseSections = {
    mit: `
## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).`,
    apache: `
## License

This project is licensed under the [Apache License 2.0](https://opensource.org/licenses/Apache-2.0).`,
    gpl: `
## License

This project is licensed under the [GNU General Public License 3.0](https://opensource.org/licenses/GPL-3.0).`,
    bsd: `
## License

This project is licensed under the [BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause).`,
    // Add more licenses and their sections as needed
  };

  const normalizedLicense = license.toLowerCase();
  return licenseSections[normalizedLicense] || '';
}

// Example usage:
const licenseSection = generateLicenseSection('MIT');
console.log(licenseSection);

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

function generateREADME({
  title,
  description,
  installation,
  usage,
  license,
  contributing,
  tests,
  author,
}) {
  return `
# ${title}

## Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Author](#author)

## Installation
${installation}

## Usage
${usage}

${license}

## Contributing
${contributing}

## Tests
${tests}

## Author
${author}
`;
}

// Example usage:
const readmeContent = generateREADME({
  title: 'My Awesome Project',
  description: 'This is a fantastic project.',
  installation: 'To install, run `npm install`.',
  usage: 'To use, run `npm start`.',
  license: generateLicenseSection('MIT'), // You can use the previous function to generate the license section.
  contributing: 'Feel free to contribute!',
  tests: 'To run tests, use `npm test`.',
  author: 'John Doe',
});

console.log(readmeContent);

//module.exports = generateMarkdown;
