const fs = require('fs')
const path = require('path')
const folderPath = './_src'
const templ = require('./template')
const fileType = '.svg'
const exportFileType = '.post.css'
// require('./template')
// fs.readdirSync(folderPath)
// console.log(fs.readdirSync(folderPath))

// const Filehound = require('filehound');
// Filehound.create()
//   .ext('svg')
//   .paths(folderPath)
//   .find((err, svgFiles) => {
//     if (err) return console.error("handle err", err);
//
//     console.log(svgFiles);
// });

function getFilesFromPath(path, extension) {
    let dir = fs.readdirSync(path);
    return dir.filter( elm => elm.match(new RegExp(`.*\.(${extension})`)));
}

// console.log(template(svgFilesList[1], fileType));

// var svgFilesList = fs.readdirSync(folderPath);
var svgFilesList = getFilesFromPath(folderPath, fileType);
// var data = templ('real', 'talk');
// console.log(svgFilesList);
// var data = template.zaz();
// var svgName = svgFilesList;
for (i in svgFilesList) {
  svgFilesList[i] = svgFilesList[i].replace(fileType, '');

  // var data = "." + svgFilesList[i] + " {\n\tbackground-image: url('" + svgFilesList[i] + fileType + "')\n}\n";
  var data = templ(svgFilesList[i], fileType);
  // var data = require('./powerlevel')(9050);
  // console.log(template(svgFilesList[i], fileType));
  // console.log(templ(svgFilesList[i], fileType));

  fs.writeFile(folderPath + "/" + svgFilesList[i] + exportFileType, data, function(err) {
    if(err) {
        return console.log(svgFilesList[i] + fileType + " was not written");
    }
    console.log("The file " + svgFilesList[i] + exportFileType + " created!");
  });
}



//[ '4glaza.svg', 'ride.svg' ]


// console.log(svgFilesList);
// console.log(typeof svgFilesList);
// console.log(typeof template, template);
// console.log(Object.keys(template).map(function(key){ return template[key] }));
// var aja = Object.keys(template).map(function(key){ return template[key] });
// console.log(template.data);
// console.log(svgName);

// var g = 10;
// template.kek(g);

// var stream = fs.createWriteStream("my_file.txt");
// var stream = fs.createWriteStream("my_file.txt");
// stream.once('open', function(fd) {
//   stream.write("My first row\n");
//   stream.write("My second row\n");
//   stream.end();
// });

// fs.readdir(folderPath, function(err, items) {
//     console.log(items);
//
//     for (var i=0; i<items.length; i++) {
//         console.log(items[i]);
//     }
// });

// const calc = require('./calc')
// const numbersToAdd = [
//     3,
//     4,
//     10,
//     2
// ]
//
// const result = calc.sum(numbersToAdd)
// console.log(`The result is: ${result}`)
//
// // const fs = require('fs')
// // let content
// // try {
// //     content = fs.readFileSync('file.md', 'utf-8')
// // } catch (ex) {
// //     console.log(ex)
// // }
// // console.log(content)
//
// const fs = require('fs')
// fs.readFile('file.md', 'utf-8', function (err, content) {
//     if (err) {
//         return console.log(err)
//     }
//
//     console.log(content)
// })
