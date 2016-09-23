// https://github.com/gruntjs/grunt-contrib-cssmin
module.exports = {
    options: {
        shorthandCompacting: false,
        roundingPrecision: -1,
        keepSpecialComments: 0
    },

    // push site
    stylesHead: {
        files: [{
            '<%= temp %>/main.min.css': ['<%= temp %>/prioritizedBootstrap.css', '<%= temp %>/prioritized.css']
        }]
    },
    stylesFooter: {
        files: [{
            '<%= site %>/general.min.css': ['<%= temp %>/notPrioritizedBootstrap.css', '<%= temp %>/notPrioritized.css']
        }]
    }
    // end of push site
};
