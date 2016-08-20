module.exports = {
    options: {
        sourcemap: 'auto'
    },
    sass: {
        files: {
            '<%= temp %>/main.css': '<%= dev %>/styles/main.scss'
        },
    }
};
