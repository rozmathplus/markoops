module.exports = {
    options: {
        flatten: true,
        layout: 'default.hbs',
        partials: ['<%= dev %>/templates/parts/**/*.hbs']
    },
    allTemplates: {
        files: {
            '<%= temp %>': ['<%= dev %>/templates/pages/**/*.hbs']
        },
    },
};
