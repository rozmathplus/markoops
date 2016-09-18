var remote = 'git@bitbucket.org:vector__projection/markoops__index-grunt.git';

// change this on each project branch
var branch = 'master';

'use strict';

module.exports = function(grunt) {
    require('time-grunt')(grunt, (stats, done) => {
        console.log('Stats:');
        stats.forEach(function(item) {
            console.log('Running "' + item[0] + '" task took ' + item[1] + 'ms');
        });

        done();
    });
    require('load-grunt-config')(grunt, {
    	data: {
    		bowerComponents: 'bower_components',
    		temp: 'temp',
    		dev: 'dev',
    		styles: 'dev/styles',
    		scripts: 'dev/scripts',
    		grunt: 'grunt',
            remote: remote,
            branch: branch
    	}
    });
};