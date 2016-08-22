module.exports.register = function(Handlebars) {
    var pagesDefaultFolder = /dev\/templates\/pages\//;

	Handlebars.registerHelper('menu', function(page) {
		console.log('===========================');
	    console.log(page);
	    // var filename = page.filename;
	    var basename = page.basename + '.hbs';
	    var srcArray = page.src.replace(pagesDefaultFolder, '').split('/');
	    var level = srcArray.indexOf(basename);
	    // console.log(filename);
	    console.log(basename);
	    console.log(srcArray);
	    console.log(level);

	    if (level === 0) {
	    	// First level menu
	    	console.log('first');
	    	return new Handlebars.SafeString('<li class="nav-item">' + page.data.title + '</li>');
	    } else {
	    	// Second level menu
	    	console.log('other');
	    }
		console.log('===========================');
	});
}
