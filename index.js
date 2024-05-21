const fs = require('fs');
const promptUser = require('./lib/promptUser');
const { Triangle, Circle, Square } = require('./lib/shapes');

async function generateLogo() {
  try {
    const { text, textColor, shape, shapeColor } = await promptUser();

    let shapeInstance;
    switch (shape) {
      case 'Triangle':
        shapeInstance = new Triangle();
        break;
      case 'Circle':
        shapeInstance = new Circle();
        break;
      case 'Square':
        shapeInstance = new Square();
        break;
    }
    shapeInstance.setColor(shapeColor);

    const svgContent = `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shapeInstance.render()}
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
      </svg>
    `;

    fs.writeFileSync('logo.svg', svgContent.trim());
    console.log('Generated logo.svg');
  } catch (error) {
    console.error('Error generating logo:', error);
  }
}

generateLogo();