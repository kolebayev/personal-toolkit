module.exports = {
  run: function () {

    // node modules
    const fs = require('fs')
    const path = require('path')
    const readlineSync = require('readline-sync')
    const os = require('os')

    // my modules
    const template = require('./template')
    const entryInstructions = require('./entryInstructions')
    const getFilesFromPath = require('./getFilesFromPath')
    const finalInstructions = require('./finalInstructions')

    // input/output files format
    const importFileType = '.svg'
    const exportFileType = '.post.css'

    // shows entry instructions in terminal
    entryInstructions();

    // The ~ that is input by the user is replaced to the home directory.
    // https://www.npmjs.com/package/readline-sync#questionpath
    const importFolderPath = readlineSync.questionPath('Enter import folder path: ', {
      isDirectory: true, exists: true, create: false
    });
    const exportFolderPath = readlineSync.questionPath('Enter export folder path: ', {
      isDirectory: true, exists: null, create: true
    });

    console.log('\n=================================\n\n');

    // read files in input path, check if files exist
    var importFilesList = getFilesFromPath(importFolderPath, importFileType);
    if (importFilesList.length === 0) {
      console.log ("No " + importFileType + " found in import folder\n");
      process.exit();
    }

    for (i in importFilesList) {
      // removes file type
      importFilesList[i] = importFilesList[i].replace(importFileType, '');
      // writes template with import files name into variable
      var data = template(importFilesList[i], importFileType);
      // writes export files to directory
      fs.writeFileSync(exportFolderPath + '/' + importFilesList[i] + exportFileType, data, function(error) {
        if (error) {
          console.log('\n' + importFilesList[i] + exportFileType + " was not written.");
        } else {
          console.log("The file " + importFilesList[i] + exportFileType + " created.");
        }
      });
    }

    finalInstructions(importFilesList, exportFolderPath);

  }
}
