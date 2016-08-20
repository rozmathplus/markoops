module.exports = {
	options: {
		livereload: true
	},
    html: {
        files: ['<%= dev %>/templates/**/*.hbs'],
        tasks: ['assemble:allTemplates']
    },
    scripts: {
        files: ['<%= dev %>/scripts/**/*.js'],
        tasks: ['jshint'],
        options: {
            interrupt: true
        }
    },
    styles: {
        files: ['<%= dev %>/styles/**/*.scss'],
        tasks: ['sass:sass']
    }
};
