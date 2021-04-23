module.exports = {
    singleQuote: true,
    printWidth: 80,
    tabWidth: 4,
    endOfLine: 'auto',
    trailingComma: 'all',
    overrides: [
        {
            files: ['*.yml', '*.yaml'],
            options: {
                tabWidth: 2
            }
        }
    ]
};
