var remoteRepo = 'git@github.com:rozmathplus/markoops.git';

'use strict';

module.exports = function(grunt) {
    require('time-grunt')(grunt, (stats, done) => {
        grunt.log.subhead('Stats:')
        stats.forEach(function(item) {
            grunt.log.oklns('Running "' + item[0] + '" task took ' + item[1] + 'ms');
            // Will create file with logs
            // grunt.file.write('.gruntlog', 'Running "' + item[0] + '" task took ' + item[1] + 'ms' + '\n');
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
            remoteRepo: remoteRepo
    	}
    });
};