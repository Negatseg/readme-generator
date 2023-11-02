

const fs = require('fs');
const inquirer = require('inquirer');
const generateTableOfContents = require('./utils/generateMarkdown');

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter your project title:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a project description:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How is the installation done:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What is the usage of the project:',
  },
  {
    type: 'input',
    name: 'license',
    message: 'Does it have any license:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Who is contributing for  this project:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'How do you test the project:',
  },
  {
    type: 'input',
    name: 'author',
    message: 'Who are the Authors?:',
  },
  {
    type: 'input',
    name: 'questions',
    message: 'Do you have questions?',
  },


];




function writeREADME(content) {
    const filePath = './userREADME.md';

    fs.writeFileSync(filePath, content)
  
  }
  
 


function init() {
    inquirer.prompt(questions)
    .then(function(responses) {
        console.log(responses);
        writeREADME(generateTableOfContents({...responses}))
    })
}

init();

