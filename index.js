// проверка
// if (window.File && window.FileReader && window.FileList && window.Blob) {
// 	// Работает
// } else {
// 	alert('File API не поддерживается данным браузером');
// }

function handleFileSelect(evt) {
	var files = evt.target.files; // FileList object
	// files is a FileList of File objects. List some properties.


	// console.log(document.getElementById('files').files[0].name);

	var box = [];

	for (i in files) {
		// console.log(document.getElementById('files').files[i].name);
		x = document.getElementById('files').files[i].name;
		box.push(x);
	}
	// box.splice(-1,3);
	var box = box.filter(Boolean);
	// var box = box.splice(-1,3);
	console.log(box);
	for (i in box) {
		console.log(typeof box[i]);
	}

	var x;
	for ( x in box ) {
		box[x] = box[x].replace('.png', '');
	}
	console.log(box);
}
document.getElementById('files').addEventListener('change', handleFileSelect, false);
