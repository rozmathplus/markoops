module.exports = {
	options: {
		livereload: true
	},
    html: {
        files: ['<%= dev %>/templates/**/*.hbs'],
        tasks: ['assemble:allTemplates']
    },
    styles: {
        files: ['<%= styles %>/**/*.scss', '!<%= stylesComponents %>/**/*.scss'],
        tasks: ['sass:sass']
    },
    stylesCustomBootstrap: {
        files: ['<%= stylesComponents %>/bootstrap/custom.scss'],
        tasks: ['sass:prioritizedSassComponents', 'sass:notPrioritizedSassComponents']
    },
    stylesPrioritizedBootstrap: {
        files: ['<%= stylesComponents %>/bootstrap/prioritizedBootstrap.scss'],
        tasks: ['sass:prioritizedSassComponents']
    },
    stylesNotPrioritizedBootstrap: {
        files: ['<%= stylesComponents %>/bootstrap/notPrioritizedBootstrap.scss'],
        tasks: ['sass:notPrioritizedSassComponents']
    }
};
