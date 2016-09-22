module.exports = function(grunt) {
    var fromHeadFile = 'temp/main.min.css',
        toHeadFile = 'dev/templates/parts/head/small/headInlineStyles.hbs';

    grunt.registerTask('grunttasks_inlineCssHead', 'Inlining CSS files to Hbs', function() {
        var msg = 'Inlining CSS files to Hbs';
        grunt.log.oklns(msg);
        try {
            var style = grunt.file.read(fromHeadFile);
            grunt.file.write(toHeadFile, style);
            // Success!
            grunt.verbose.ok();
        } catch(e) {
            // Something went wrong.
            grunt.verbose.or.write(msg).error().error(e.message);
            grunt.fail.warn('Something went wrong.');
        }
    });
};