// node modules
const fs = require('fs')
const path = require('path')
const readline = require('readline-sync')
const os = require('os')

// my modules
const template = require('./template')
const entryInstructions = require('./entryInstructions')
const getFilesFromPath = require('./getFilesFromPath')

// input/output files format
const importFileType = '.svg'
const exportFileType = '.post.css'

// shows entry instructions in terminal
entryInstructions();

// read input and export path
const importFolderPath = os.homedir() + '/desktop/' + readline.question('Enter import folder path: ')
const exportFolderPath = os.homedir() + '/desktop/' + readline.question('Enter export folder path: ')
console.log('\n');

// read files in input path, check if files exist
var importFilesList = getFilesFromPath(importFolderPath, importFileType);
if (importFilesList.length === 0) {
  console.log ("No " + importFileType + " found in working directory");
  process.exit();
}

for (i in importFilesList) {

  importFilesList[i] = importFilesList[i].replace(importFileType, '');

  var data = template(importFilesList[i], importFileType);

  fs.writeFileSync(exportFolderPath + '/' + importFilesList[i] + exportFileType, data, function(error) {
     // if (error) throw error;
     if (error) throw console.log('\n' + importFilesList[i] + exportFileType + " was not written.");
    // if(error) {
    //     return console.log('\n' + importFilesList[i] + exportFileType + " was not written.");
    // }
    console.log("The file " + importFilesList[i] + exportFileType + " created.");
  });
}

if (importFilesList.length > 1) {
  console.log('\n=================================\n\n' + importFilesList.length + " files were processed. \n" + 'Can be found here: ' + exportFolderPath);
} else {
  console.log('=================================\n\n' + importFilesList.length + " file was processed. \n" + 'Can be found here: ' + exportFolderPath);
}
