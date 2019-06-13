const fs = require('fs')
module.exports = function getFilesFromPath(path, extension) {
    let dir = fs.readdirSync(path);
    return dir.filter( elm => elm.match(new RegExp(`.*\.(${extension})`)));
}
