module.exports = {
	options: {
		livereload: true
	},
    html: {
        files: ['<%= dev %>/templates/**/*.hbs'],
        tasks: ['assemble:allTemplates']
    },
    scripts: {
    	files: ['<%= dev %>/js/**/*.js'],
    	tasks: ['jshint'],
    	options: {
    		interrupt: true
    	}
    }
};
