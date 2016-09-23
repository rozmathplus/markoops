// https://www.npmjs.com/package/grunt-import
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
    },
    imagesForSite: {
        expand: true,
        cwd: '<%= temp %>/images/',
        src: '*.{svg,png,jpg,gif}',
        dest: '<%= site %>/images/'
    }
};
