module.exports = {
	copyImages: {
		options: {
	        optimizationLevel: 3,
	        svgoPlugins: [{ removeViewBox: false }]
	    },
        files: [{
        	expand: true,
	        cwd: '<%= dev%>/images/',
	        src: ['**/<%= imageFiles %>'],
	        dest: '<%= temp %>/images/' 
        }]
    },
    copySiteImages: {
		options: {
	        optimizationLevel: 3,
	        svgoPlugins: [{ removeViewBox: false }]
	    },
        files: [{
        	expand: true,
	        cwd: '<%= dev%>/images/',
	        src: ['**/<%= imageFiles %>'],
	        dest: '<%= site %>/images/' 
        }]
    }
};
