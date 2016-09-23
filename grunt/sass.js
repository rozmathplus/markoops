// https://github.com/gruntjs/grunt-contrib-sass
module.exports = {
    options: {
        sourcemap: 'auto'
    },
    // Bootstrap
    stylesPrioritizedBootstrap: {
        files: {
            '<%= temp %>/prioritizedBootstrap.css': '<%= styles %>/bootstrap/prioritizedBootstrap.scss'
        }
    },
    stylesNotPrioritizedBootstrap: {
        files: {
            '<%= temp %>/notPrioritizedBootstrap.css': '<%= styles %>/bootstrap/notPrioritizedBootstrap.scss'
        }
    },
    // Main styles
    stylesPrioritizedMain: {
        files: {
            '<%= temp %>/prioritized.css': '<%= styles %>/prioritized.scss'
        }
    },
    stylesNotPrioritizedMain: {
        files: {
            '<%= temp %>/notPrioritized.css': '<%= styles %>/notPrioritized.scss'
        }
    }
};
