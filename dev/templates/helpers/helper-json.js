module.exports.register = function(Handlebars) {
	Handlebars.registerHelper('json', function(context) {
		// to return data in html,
		// use json helper with triple curly braces
		// F.E.: {{{json ITEMTORETURN}}}
	    return '<pre>' + JSON.stringify(context, undefined, 1) + '</pre>';
	});
}
