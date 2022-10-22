module.exports = {
    env: {
        'browser': true,
        'es2021': true
    },
    extends: [
        'airbnb',
        'airbnb-typescript',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json'
    },
    rules: {
        'react/no-array-index-key':[0],
        'react/button-has-type': [0],
        'react/prop-types': [0],
        'react/require-default-props': [0],
        'react/jsx-props-no-spreading': [0],
        'react/function-component-definition': [2, {
            namedComponents: 'arrow-function',
            unnamedComponents: 'arrow-function',
        }],
        '@typescript-eslint/indent': [0]
    }
}