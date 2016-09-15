module.exports = {
    options: {

    },
    jsJquery: {
    	src: ['<%= scripts %>/jquery.js'],
    	dest: '<%= temp %>/jquery.js'
    },
    jsBootstrap: {
    	src: ['<%= scripts %>/bootstrap.js'],
    	dest: '<%= temp %>/bootstrap.js'
    },
    jsMain: {
    	src: ['<%= scripts %>/main.js'],
    	dest: '<%= temp %>/main.js'
    }
};
