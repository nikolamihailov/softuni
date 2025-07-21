/** @type {import("prettier").Config} */
module.exports = {
    printWidth: 100,          // Max line width before wrapping
    tabWidth: 2,              // Use 2 spaces for indentation (Angular standard)
    useTabs: false,           // Use spaces, not tabs
    semi: true,               // Add semicolons at the ends of statements
    singleQuote: true,        // Use single quotes instead of double
    trailingComma: 'all',     // Add trailing commas wherever possible (safer for git diffs)
    bracketSpacing: true,     // Print spaces between brackets in object literals
    arrowParens: 'always',    // Always include parens for arrow functions
    endOfLine: 'lf',          // Use LF for newlines (consistent across OSes)
    overrides: [
        {
            files: '*.html',
            options: {
                printWidth: 120,    // Angular templates often need more space
                parser: 'angular',
            },
        },
        {
            files: '*.json',
            options: {
                printWidth: 120,
            },
        },
    ],
};