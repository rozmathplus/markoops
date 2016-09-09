module.exports = {
	copyImages: {
		options: {
	        optimizationLevel: 3,
	        svgoPlugins: [{ removeViewBox: false }]
	    },
        files: [{
        	expand: true,
	        cwd: '<%= dev%>/images/',
	        src: ['**/*.{svg,png,jpg,gif}'],
	        dest: '<%= temp%>/images/' 
        }]
    }
};
