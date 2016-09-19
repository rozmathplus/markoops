// https://github.com/gruntjs/grunt-contrib-cssmin
module.exports = {
    options: {
        shorthandCompacting: false,
        roundingPrecision: -1
    },
    stylesFooter: {
        files: [{
            '<%= temp %>/general.css': ['<%= temp %>/notPrioritizedBootstrap.css', '<%= temp %>/notPrioritized.css']
        }]
    }
};
