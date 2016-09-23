// https://github.com/gruntjs/grunt-contrib-concat
module.exports = {
    options: {
    	separator: ';'
    },
    dist: {
    	src: ['<%= scripts %>/**/*.js'],
    	dest: '<%= temp %>/main.js'
    }
};
