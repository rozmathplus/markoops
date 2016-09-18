// https://github.com/rubenv/grunt-git
module.exports = {
	options: {
        commit: true,
        push: true,
        remote: '<%= remoteRepo %>',
        message: 'update'
    },
    pushTemp: {
        options: {
        	dir: '<%= temp %>',
        	branch: 'gh-pages'
        }
    }
};
