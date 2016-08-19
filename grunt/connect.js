module.exports = {
    options: {
        port: 3000,
        livereload: true,
        hostname: '0.0.0.0',
        open: true
    },
    localhost: {
        options: {
            base: ['.','<%= temp %>'],
        }
    }
};
