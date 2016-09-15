module.exports = {
    options: {
    	separator: ';'
    },
    dist: {
    	src: ['<%= scripts %>/**/*.js'],
    	dest: '<%= temp %>/main.js'
    }
};
