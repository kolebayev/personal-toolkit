module.exports = function finalInstructions(importFilesList, exportFolderPath) {
  if (importFilesList.length > 1) {
    console.log('\n=================================\n\n' + importFilesList.length + " files were processed. \n" + 'Can be found here: ' + exportFolderPath + '\n\n');
  } else {
    console.log('=================================\n\n' + importFilesList.length + " file was processed. \n" + 'Can be found here: ' + exportFolderPath + '\n\n');
  }
}
