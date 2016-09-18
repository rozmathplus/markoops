// https://github.com/rubenv/grunt-git
module.exports = {
    pushTemp: {
        options: {
        	dir: '<%= temp %>',
        	branch: 'temp'
        }
    }
};
