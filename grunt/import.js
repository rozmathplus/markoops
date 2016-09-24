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
        src: '<%= imageFiles %>',
        dest: '<%= site %>/images/'
    },
    cacheManifest: {
        src: ['<%= dev %>/templates/cache/data.appcache'],
        dest: '<%= temp %>/data.appcache'
    }
};
