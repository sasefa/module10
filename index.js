const { Triangle, Square, Circle } = require('./lib/shapes');
const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please enter up to three characters for text:',
        validate: (value) => (value.length > 3 ? 'Text may not be more than 3 characters' : true),
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter color keyword or hexadecimal number for text color',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Which shape do you want?',
        choices: ['Triangle', 'Square', 'Circle'],
    },
    {
        type: 'input',
        name: 'color',
        message: 'Enter color keyword or hexadecimal number for shape color:',
    }
];

const main = async () => {
    try {
        const { text, textColor, shape: shapeType, color } = await inquirer.prompt(questions);
    
        let shape;
        if (shapeType === 'Triangle') {
            shape = new Triangle(color);
        } else if (shapeType === 'Square') {
            shape = new Square(color);
        } else if (shapeType === 'Circle') {
            shape = new Circle(color);
        }
    
        const svg = shape.render(text, textColor);
        await writeFile(`./examples/logo.svg`, svg);
        console.log(`Generated logo.svg`);
      } catch (error) {
        console.error(error);
    }
};

main();
