module.exports = {
	copyImages: {
        files: [{
        	expand: true,
	        cwd: '/',
	        src: ['<%= dev%>/images/**/*.{svg,png,jpg,gif}'],
	        dest: '<%= temp%>' 
        }]
    }
};
