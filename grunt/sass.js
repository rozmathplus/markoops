module.exports = {
    options: {
        sourcemap: 'auto'
    },
    prioritizedSassComponents: {
    	files: {
    		'<%= temp %>/prioritizedBootstrap.css': '<%= styles %>/bootstrap/prioritizedBootstrap.scss'
    	}
    },
    notPrioritizedSassComponents: {
    	files: {
    		'<%= temp %>/notPrioritizedBootstrap.css': '<%= styles %>/bootstrap/notPrioritizedBootstrap.scss'
    	}
    },
    sass: {
        files: {
            '<%= temp %>/main.css': '<%= styles %>/main.scss'
        },
    }
};
