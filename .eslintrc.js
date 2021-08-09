// .eslintrc.js
module.exports = {
    root: true,
    env: {
        node: true,
        es6: true,
    },
    parserOptions: { ecmaVersion: 2021, ecmaFeatures: { jsx: true } },
    ignorePatterns: ['node_modules/*', '.next/*', '.out/*', '!.prettierrc.js'], // We don't want to lint generated files nor node_modules, but we want to lint .prettierrc.js (ignored by default by eslint)
    extends: ['eslint:recommended'],
    overrides: [
        // This configuration will apply only to TypeScript files
        {
            files: ['**/*.ts', '**/*.tsx'],
            parser: '@typescript-eslint/parser',
            settings: { react: { version: 'detect' } },
            env: {
                browser: true,
                node: true,
                es6: true,
            },
            extends: [
                'eslint:recommended',
                'plugin:@typescript-eslint/recommended', // TypeScript rules
                'plugin:react/recommended', // React rules
                'plugin:react-hooks/recommended', // React hooks rules
                'plugin:jsx-a11y/recommended', // Accessibility rules
                'plugin:prettier/recommended', // Prettier plugin
            ],
            rules: {
                // Includes .prettierrc.js rules
                'prettier/prettier': ['error', {}, { usePrettierrc: true }],

                // We will use TypeScript's types for component props instead
                'react/prop-types': 'off',

                // No need to import React when using Next.js
                'react/react-in-jsx-scope': 'off',

                // This rule is not compatible with Next.js <Link /> components
                'jsx-a11y/anchor-is-valid': 'off',

                // Why would you want unused vars?
                '@typescript-eslint/no-unused-vars': ['warn'],

                // I suggest this setting for requiring return types on functions only where useful
                '@typescript-eslint/explicit-function-return-type': [
                    'off',
                    {
                        allowExpressions: true,
                        allowConciseArrowFunctionExpressionsStartingWithVoid: true,
                    },
                ],
                '@typescript-eslint/explicit-module-boundary-types': 'off',
            },
        },
    ],
}
