const eslint = require("@eslint/js");
const globals = require("globals");

module.exports = [
    {
        files: ["**/*.js"],
        languageOptions: {
            globals: globals.node,
        },
    },

    {
        files: ["tests/**/*.js"],
        languageOptions: {
            globals: globals.jest,
        },
    },

    eslint.configs.recommended,
];
