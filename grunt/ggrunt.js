module.exports = function(grunt) {
    grunt.registerTask('something', 'Do something interesting.', function(arg) {
        var msg = 'Doing something...';
        grunt.log.oklns(msg);
        try {
            grunt.log.debug(arg);
            var style = grunt.file.read('temp/main.min.css');
            grunt.log.write(style);
            grunt.file.write('dev/templates/parts/head/small/headInlineStyles.hbs', style);
            // Success!
            grunt.verbose.ok();
        } catch(e) {
            // Something went wrong.
            grunt.verbose.or.write(msg).error().error(e.message);
            grunt.fail.warn('Something went wrong.');
        }
    });
};