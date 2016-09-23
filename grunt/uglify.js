// https://github.com/gruntjs/grunt-contrib-uglify
module.exports = {
	scriptsFooter: {
		files: {
			'<%= site %>/general.min.js': ['<%= temp %>/jquery.js', '<%= temp %>/bootstrap.js', '<%= temp %>/main.js']
		}
	}
}