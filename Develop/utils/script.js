const fs = require('fs');
const inquirer = require('inquirer');
const generateTableOfContents = require('markdown-table-of-contents');

const questions = [
  {
    type: 'input',
    name: 'projectTitle',
    message: 'Enter your project title:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a project description:',
  },
  // Add more questions for other sections (installation, usage, etc.)
];

inquirer.prompt(questions).then((answers) => {
  const {
    projectTitle,
    description,
    installation,
    usage,
    contributing,
    tests,
    license,
    githubUsername,
    email,
  } = answers;

  // Generate README content based on user input
  const readmeContent = `
    # ${projectTitle}
    
    ## Description
    ${description}
    
    ${generateTableOfContents([
      'Installation',
      'Usage',
      'License',
      'Contributing',
      'Tests',
      'Questions',
    ])}
    
    ## Installation
    ${installation}
    
    ## Usage
    ${usage}
    
    ## License
    ![License Badge](https://img.shields.io/badge/license-${license}-brightgreen)
    This application is covered under the ${license} license.
    
    ## Contributing
    ${contributing}
    
    ## Tests
    ${tests}
    
    ## Questions
    You can find me on GitHub: [${githubUsername}](https://github.com/${githubUsername})
    For any additional questions, please contact me at ${email}.
  `;

  // Save the README file
  fs.writeFileSync('README.md', readmeContent);

  console.log('README.md successfully generated.');
});