
// import pctc as './pctc/index';
// require('./pctc/index')
// const pctc = require('./pctc/index')
// require('./colordiffcalc/index')

// https://github.com/terkelg/prompts#selectmessage-choices-initial-hint-warn

// const exec = require('child_process').exec;
// const execFile = require('child_process').execFile;

const postCssTemplateCreator = require("./pctc/index.js");
const colorDifferenceCalculator = require("./colordiffcalc/index.js");

'use strict';

// const { prompt } = require('./');
const prompt = require('prompts');

let interval;

(async function(){
    const questions = [
        {
            type: 'select',
            name: 'tool',
            message: 'Select a tool',
            choices: [
              { title: 'post css template creator', value: 'pctc' },
              { title: 'color diff calculator', value: 'cldc' }
            ]
        }
    ];
    const answers = await prompt(questions, {onCancel:cleanup, onSubmit:cleanup});
    console.log('\n\n\n');
    // if (answers.tool === 'pctc' ) {
    //     postCssTemplateCreator.run();
    // } else {
    //     colorDifferenceCalculator.run();
    // }
    switch(answers.tool) {
        case 'pctc':
            postCssTemplateCreator.run();
            break;
        case 'cldc':
            colorDifferenceCalculator.run();
            break;
    }

})();

function cleanup() {
    clearInterval(interval);
}

