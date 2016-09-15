module.exports = {
	options: {
		livereload: true
	},

    // JS grunt components
    jsGruntComponents: {
        files: ['<%= grunt %>/**/*.js'],
        tasks: ['exec:clearTerminal', 'assemble:pages']
    },
    // problems with this

    // JS helpers
    jsHelpers: {
        files: ['<%= dev %>/templates/helpers/*.js'],
        tasks: ['exec:clearTerminal', 'assemble:pages']
    },

    // Scripts
    jsJquery: {
        files: ['<%= scripts %>/jquery.js'],
        tasks: ['exec:clearTerminal', 'import:jquery']
    },
    jsBootstrap: {
        files: ['<%= scripts %>/bootstrap.js'],
        tasks: ['exec:clearTerminal', 'import:jsBootstrap']
    },
    jsMain: {
        files: ['<%= scripts %>/main.js'],
        tasks: ['exec:clearTerminal', 'import:jsMain']
    },

    // Handlebars
    html: {
        files: ['<%= dev %>/templates/**/*.hbs'],
        tasks: ['exec:clearTerminal', 'assemble:pages']
    },

    // Styles
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

    // Bootstrap styles
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
