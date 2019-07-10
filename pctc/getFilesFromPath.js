const fs = require('fs')
module.exports = function getFilesFromPath(path, extension) {
    const dir = fs.readdirSync(path);
    const re = new RegExp(`.*\.(${extension})`);
    return dir.filter(elm => elm.match(re));
}
