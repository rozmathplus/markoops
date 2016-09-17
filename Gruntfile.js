'use strict';

module.exports = function(grunt) {
    require('time-grunt')(grunt, (stats, done) => {
        console.log('Stats:');
        console.log(stats);

        done();
    });
    require('load-grunt-config')(grunt, {
    	data: {
    		bowerComponents: 'bower_components',
    		temp: 'temp',
    		dev: 'dev',
    		styles: 'dev/styles',
    		scripts: 'dev/scripts',
    		grunt: 'grunt'
    	}
    });
    require('time-grunt')(grunt, (stats, done) => {
        done();
    });
};