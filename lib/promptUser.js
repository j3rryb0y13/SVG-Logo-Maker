const inquirer = require('inquirer');

function prompUser() {
  return inquirer.createPromptModule([
    {
      type: 'input',
      name: 'text',
      message: 'Enter text for the logo (up to 3 characters):',
    }, 
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (color keyword or hexadecimal):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape for the logo:',
      choices: ['Triangle', 'Circle', 'Square']
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (color keyword or hexadecimal):',
    },
  ])
}


module.exports = prompUser;