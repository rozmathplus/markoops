module.exports.register = function(Handlebars) {
	Handlebars.registerHelper('json', function(context) {
	    return JSON.stringify(context);
	});
}
