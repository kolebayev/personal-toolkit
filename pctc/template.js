module.exports = function template(name, extension) {
    var x = "." + name + " {\n\tbackground-image: url('" + name + extension + "')\n}\n";
    return x;
}
