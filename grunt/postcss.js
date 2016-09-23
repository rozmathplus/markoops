// https://github.com/postcss/autoprefixer
module.exports = {
    options: {
        map: false,
        processors: [
            require('autoprefixer')({
                browsers: ['last 2 versions']
            })
        ]
    },
    dev: {
        src: ['<%= temp %>/notPrioritized.css', '<%= temp %>/prioritized.css']
    },
    auto: {
        src: '<%= temp %>/auto.css'
    }
};
