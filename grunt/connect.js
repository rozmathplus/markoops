module.exports = {
    options: {
        port: 3000,
        livereload: 35729,
        hostname: '0.0.0.0'
    },
    localhost: {
        options: {
            base: ['.','<%= temp %>'],
        }
    }
};
