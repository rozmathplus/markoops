module.exports = {
    options: {
        sourcemap: 'auto'
    },
    prioritizedSassComponents: {
    	files: {
    		'<%= temp %>/prioritizedBootstrap.css': '<%= stylesComponents %>/bootstrap/prioritizedBootstrap.scss'
    	}
    },
    notPrioritizedSassComponents: {
    	files: {
    		'<%= temp %>/notPrioritizedBootstrap.css': '<%= stylesComponents %>/bootstrap/notPrioritizedBootstrap.scss'
    	}
    },
    sass: {
        files: {
            '<%= temp %>/main.css': '<%= styles %>/main.scss'
        },
    }
};
