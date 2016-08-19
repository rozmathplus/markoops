module.exports = {
    options: {
        flatten: true,
        layout: 'default.hbs',
        layoutdir: '<%= dev %>/templates/layouts',
        partials: ['<%= dev %>/templates/parts/**/*.hbs']
    },
    allTemplates: {
        files: {
            '<%= temp %>': ['<%= dev %>/templates/pages/**/*.hbs']
        },
    },
};
