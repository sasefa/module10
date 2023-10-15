const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle } = require('./lib/shapes');

const questions = [
   // questions for user input
];

inquirer.prompt(questions).then((answers) => {
   const triangle = new Triangle(answers.color);
   const svg = triangle.render();

   fs.writeFile('./examples/triangle.svg', svg, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
});
