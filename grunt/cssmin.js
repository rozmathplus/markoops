// https://github.com/gruntjs/grunt-contrib-cssmin
module.exports = {
    options: {
        shorthandCompacting: false,
        roundingPrecision: -1
    },
    stylesHead: {
        files: [{
            '<%= temp %>/main.min.css': ['<%= temp %>/prioritizedBootstrap.css', '<%= temp %>/prioritized.css']
        }]
    },
    stylesFooter: {
        files: [{
            '<%= temp %>/general.min.css': ['<%= temp %>/notPrioritizedBootstrap.css', '<%= temp %>/notPrioritized.css']
        }]
    }
};
