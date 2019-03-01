
## pctc

**Post css template creator**  is node app created to speed up a routine.  
App looks through entered directory for `.svg` files and creates `.post.css` files in another directory based on defined template. `.svg` and `.post.css` files have same names.

## Template
```
.svgFileName {
	background-image: url('svgFileName.svg');
}
```
Template file: `./app/template.js`

## Install
`git clone https://github.com/kolebayev/pctc.git`  
`cd pctc`  
`npm i`  
`npm start`  

## Input/output directories  
Examples:  
`~/Documents/icons/svg-folder`  
`~/Desktop/icons`  

The `~` means that is input by the user is replaced to the home directory (_users/username_).

After app done, export directory can be reached by `⌘ + click` on export path shown in terminal messages.  
If export directory doesn't exist, it will be created automatically.
