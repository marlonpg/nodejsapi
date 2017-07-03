module.exports.getImages = function (callback) {
	var path = require('path');
	var fs    = require('fs');
	var fileType = '.png',
		files = [], i;
	var imageDir = './static/Monsters';
	fs.readdir(imageDir, function (err, list) {
		for(i=0; i<list.length; i++) {
			if(path.extname(list[i]) === fileType) {
				var img = {'file': list[i], 'sprite':list[i].substring(0, list[i].length-4)};
				files.push(img); //store the file name into the array files
			}
		}
		callback(err, files);
	});
}