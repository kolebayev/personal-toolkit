const fs = require('fs')
const path = require('path')
const readline = require('readline');
const template = require('./template')

const folderPath = './_src'
const fileType = '.svg'
const exportFileType = '.post.css'


function getFilesFromPath(path, extension) {
    let dir = fs.readdirSync(path);
    return dir.filter( elm => elm.match(new RegExp(`.*\.(${extension})`)));
}

var svgFilesList = getFilesFromPath(folderPath, fileType);

if (svgFilesList.length === 0) {
  console.log ("No " + fileType + " found in working directory");
  process.exit();
}

for (i in svgFilesList) {
  svgFilesList[i] = svgFilesList[i].replace(fileType, '');
  var data = template(svgFilesList[i], fileType);
  fs.writeFile(folderPath + "/" + svgFilesList[i] + exportFileType, data, function(err) {
    if(err) {
        return console.log(svgFilesList[i] + fileType + " was not written.");
    }
  });
    console.log("The file " + svgFilesList[i] + exportFileType + " created.");
}

if (svgFilesList.length > 1) {
  console.log('=================================\n' + svgFilesList.length + " files were processed. " + 'Can be found here: ' + folderPath);
} else {
  console.log('=================================\n' + svgFilesList.length + " file was processed. " + 'Can be found here: ' + folderPath);
}
