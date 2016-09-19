module.exports = {
    options: {
    },
    stylesFooter: {
        target: {
            files: [{
                cwd: '<%= temp %>',
                src: ['notPrioritizedBootstrap.css', 'notPrioritized.css'],
                dest: 'general.css'
            }]
        }
    }
};
