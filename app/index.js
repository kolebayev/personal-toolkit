const fs = require('fs')
const path = require('path')
const readline = require('readline');
const template = require('./template')

const importFolderPath = './_src'
const importFileType = '.svg'
const exportFileType = '.post.css'

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

  fs.writeFile(importFolderPath + "/" + importFilesList[i] + exportFileType, data, function(err) {
    if(err) {
        return console.log(importFilesList[i] + exportFileType + " was not written.");
    }
  });
    console.log("The file " + importFilesList[i] + exportFileType + " created.");
}

if (importFilesList.length > 1) {
  console.log('=================================\n' + importFilesList.length + " files were processed. " + 'Can be found here: ' + importFolderPath);
} else {
  console.log('=================================\n' + importFilesList.length + " file was processed. " + 'Can be found here: ' + importFolderPath);
}
