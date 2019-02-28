const fs = require('fs')
const path = require('path')
const readline = require('readline-sync')
const os = require('os')
const template = require('./template')
const entryInstructions = require('./entryInstructions')

const importFileType = '.svg'
const exportFileType = '.post.css'

entryInstructions();

const importFolderPath = os.homedir() + '/desktop/' + readline.question('Enter import folder path: ')
const exportFolderPath = os.homedir() + '/desktop/' + readline.question('Enter export folder path: ')
console.log('\n');

function getFilesFromPath(path, extension) {
    let dir = fs.readdirSync(path);
    return dir.filter( elm => elm.match(new RegExp(`.*\.(${extension})`)));
}

var importFilesList = getFilesFromPath(importFolderPath, importFileType);

if (importFilesList.length === 0) {
  console.log ("No " + importFileType + " found in working directory");
  process.exit();
}

for (i in importFilesList) {

  importFilesList[i] = importFilesList[i].replace(importFileType, '');

  var data = template(importFilesList[i], importFileType);

  fs.writeFileSync(exportFolderPath + '/' + importFilesList[i] + exportFileType, data, function(err) {
    if(err) {
        return console.log('\n' + importFilesList[i] + exportFileType + " was not written.");
    }
  });
  console.log("The file " + importFilesList[i] + exportFileType + " created.");
}

if (importFilesList.length > 1) {
  console.log('\n=================================\n\n' + importFilesList.length + " files were processed. \n" + 'Can be found here: ' + exportFolderPath);
} else {
  console.log('=================================\n\n' + importFilesList.length + " file was processed. \n" + 'Can be found here: ' + exportFolderPath);
}
