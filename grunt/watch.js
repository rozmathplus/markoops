module.exports = {
	options: {
		livereload: true
	},
    // hbs
    html: {
        files: ['<%= dev %>/templates/**/*.hbs'],
        tasks: ['assemble:pages']
    },
    // Main
    styles: {
        files: ['<%= styles %>/**/*.scss', '!<%= styles %>/bootstrap/**/*.scss'],
        tasks: ['sass:sass']
    },
    // Bootstrap
    stylesCustomBootstrap: {
        files: ['<%= styles %>/bootstrap/custom.scss'],
        tasks: ['sass:prioritizedSassComponents', 'sass:notPrioritizedSassComponents']
    },
    stylesPrioritizedBootstrap: {
        files: ['<%= styles %>/bootstrap/prioritizedBootstrap.scss'],
        tasks: ['sass:prioritizedSassComponents']
    },
    stylesNotPrioritizedBootstrap: {
        files: ['<%= styles %>/bootstrap/notPrioritizedBootstrap.scss'],
        tasks: ['sass:notPrioritizedSassComponents']
    }
};
