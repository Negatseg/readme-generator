// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
//const questions = [];
const fs = require('fs');
const inquirer = require('inquirer');
//const generateTableOfContents = require('markdown-table-of-contents');
const generateTableOfContents = require('./utils/generateMarkdown');

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
  {
    type: 'input',
    name: 'installation',
    message: 'How is the installation done:',
  },
  {
    type: 'input',
    name: 'usuage',
    message: 'What is the usage of the project:',
  },
  {
    type: 'input',
    name: 'license',
    message: 'Does it ahve any license:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Who is contributing for  this project:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Hwo do you test the project:',
  },
  {
    type: 'input',
    name: 'author',
    message: 'Who are the ASuthors?:',
  },
  // Add more questions for other sections (installation, usage, etc.)
];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

function writeREADME(content) {
    // Define the file path (assuming it's in the same directory as the script)
    const filePath = './userREADME.md';

    fs.writeFileSync(filePath, content)
  
    // Write the content to the file
    // fs.writeFile(filePath, content, (err) => {
    //   if (err) {
    //     console.error('Error writing README file:', err);
    //   } else {
    //     console.log('README file has been successfully written.');
    //   }
    // });
  }
  
  // Example usage:
//   const readmeContent = `
//   # My Node.js Project
  
//   This is a sample README file for a Node.js project.
//   `;
  
  //writeREADME(readmeContent);

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(responses) {
        console.log(responses);
        writeREADME(generateTableOfContents({...responses}))
    })
}

init();

// Function call to initialize app
//init();


//const express = require('express');

//function initializeApp() {
  //const app = express();

  // Define routes and middleware here
  // For example, you can set up a basic route:
//   app.get('/', (req, res) => {
//     res.send('Hello, Node.js App!');
  //});

  // Start the server
  //const port = process.env.PORT || 3000;
//   app.listen(port, () => {
//     console.log(`App is listening on port ${port}`);
//   });
// }

// // Example usage:
// initializeApp();