module.exports = {
    options: {
        flatten:    true,
        layout:     'default.hbs',
        layoutdir:  '<%= dev %>/templates/layouts',
        helpers:    '<%= dev %>/templates/helpers/helper-*.js',
        partials:   '<%= dev %>/templates/parts/**/*.hbs'
    },
    pages: {
        files: {
            '<%= temp %>': ['<%= dev %>/templates/pages/**/*.hbs']
        }
    },
    pagesSite: {
        options: {
            layout: 'site.hbs'
        },
        files: {
            '<%= site %>': ['<%= dev %>/templates/pages/**/*.hbs']
        }
    }
};
