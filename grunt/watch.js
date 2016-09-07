module.exports = {
	options: {
		livereload: true
	},

    // JS grunt components
    jsHelpers: {
        files: ['<%= dev %>/templates/helpers/*.js'],
        tasks: ['exec:clearTerminal', 'assemble:pages']
    },

    // JS helpers
    jsGruntComponents: {
        files: ['<%= dev %>/templates/helpers/*.js'],
        tasks: ['exec:clearTerminal', 'assemble:pages']
    },

    // hbs
    html: {
        files: ['<%= dev %>/templates/**/*.hbs'],
        tasks: ['exec:clearTerminal', 'assemble:pages']
    },

    // Main
    stylesCustomMain: {
        files: ['<%= styles %>/_customVariables.scss'],
        tasks: ['sass:stylesPrioritizedMain', 'sass:stylesNotPrioritizedMain']
    },
    stylesPrioritizedMain: {
        files: ['<%= styles %>/prioritized/**/*.scss', '<%= styles %>/prioritized.scss'],
        tasks: ['sass:stylesPrioritizedMain']
    },
    stylesNotPrioritizedMain: {
        files: ['<%= styles %>/notPrioritized/**/*.scss', '<%= styles %>/notPrioritized.scss'],
        tasks: ['sass:stylesNotPrioritizedMain']
    },

    // Bootstrap
    stylesCustomBootstrap: {
        files: ['<%= styles %>/bootstrap/custom.scss'],
        tasks: ['sass:stylesNotPrioritizedBootstrap', 'sass:stylesPrioritizedBootstrap']
    },
    stylesPrioritizedBootstrap: {
        files: ['<%= styles %>/bootstrap/prioritizedBootstrap.scss'],
        tasks: ['sass:stylesPrioritizedBootstrap']
    },
    stylesNotPrioritizedBootstrap: {
        files: ['<%= styles %>/bootstrap/notPrioritizedBootstrap.scss'],
        tasks: ['sass:stylesNotPrioritizedBootstrap']
    }
};
