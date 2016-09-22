// https://github.com/robwierzbowski/grunt-build-control
module.exports = {
	options: {
        commit: true,
        push: true,
        remote: '<%= remoteRepo %>',
        message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
    },
    pushSite: {
        options: {
        	dir: '<%= site %>',
        	branch: 'gh-pages'
        }
    }
};
