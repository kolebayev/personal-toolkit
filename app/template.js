
// var template = "ab+c";
// var lol = ".${y} {\n\tbackground-image: url('${y}.svg')\n}\n";
// var kek = function (y) {
//   y = y*y;
//   console.log(y);
// }

// var lol = ".brand-logo_name_simtrevel {\n\tbackground-image: url('brand-logo_name_simtrevel.svg')\n}\n"

// var zaz = function (y) {
  // o = "." + y + "{\n\tbackground-image: url('" + y + ".svg')\n}\n";
  // o = ".${y} {\n\tbackground-image: url('${y}.svg')\n}\n"
// }
// var svgFilesList = [];
// var svgName = '';
// var data = "." + svgName + " {\n\tbackground-image: url('" + svgName + ".svg')\n}\n";

//
// function template (svgName) {
//   return "." + svgName + " {\n\tbackground-image: url('" + svgName + ".svg')\n}\n";
// }
//
// module.exports.template = template
//

// function getFilesFromPath(path, extension) {
//     let dir = fs.readdirSync(path);
//     return dir.filter( elm => elm.match(new RegExp(`.*\.(${extension})`)));
// }

function template(name, extension) {
    var x = "." + name + " {\n\tbackground-image: url('" + name + extension + "')\n}\n";
    return x;
}
module.exports = template;
// var data = "." + svgFilesList[i] + " {\n\tbackground-image: url('" + svgFilesList[i] + fileType + "')\n}\n";

// module.exports = templ;
// module.exports.template = template;
// module.exports = {
     // templ: templ
    // template : template,
    // kek : kek,
    // lol : lol,
    // zaz : zaz,
    // data : data,
    // svgName : svgName
    // svgFilesList : svgFilesList
// };

// .brand-logo_name_simtrevel {
// 	background-image: url('brand-logo_name_simtrevel.svg')
// }
