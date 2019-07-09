const fs = require('fs')
module.exports = function getFilesFromPath(path, extension) {
    let re = new RegExp(`.*\.(${extension})`);
    return dir.filter( elm => elm.match(re));
}
