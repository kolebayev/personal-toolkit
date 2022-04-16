// https://github.com/terkelg/prompts#selectmessage-choices-initial-hint-warn
'use strict';

const prompt = require('prompts');
const postCssTemplateCreator = require('./pctc/index.js');
const colorDifferenceCalculator = require('./colordiffcalc/index.js');
const csvGenerator = require('./csvGenerator/index.js');
let interval;

(async function () {
  const questions = [
    {
      type: 'select',
      name: 'tool',
      message: 'Select a tool',
      choices: [
        { title: 'post css template creator', value: 'pctc' },
        { title: 'color diff calculator', value: 'cldc' },
        { title: 'csv generator', value: 'csvgen' },
      ],
    },
  ];
  const answers = await prompt(questions, {
    onCancel: cleanup,
    onSubmit: cleanup,
  });

  console.log('\n\n\n');

  switch (answers.tool) {
    case 'pctc':
      postCssTemplateCreator.run();
      break;
    case 'cldc':
      colorDifferenceCalculator.run();
      break;
    case 'csvgen':
      csvGenerator.run();
      break;
  }
})();

function cleanup() {
  clearInterval(interval);
}
