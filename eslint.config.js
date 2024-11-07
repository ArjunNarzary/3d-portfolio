import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

import js from '@eslint/js';

import globals from 'globals';

export default tseslint.config(
    { ignores: ['dist', 'node_modules', 'public', 'src/assets'] },
    {
        extends: [
            js.configs.recommended,
            ...tseslint.configs.recommended,
            'plugin:react/recommended',
            'plugin:prettier/recommended',
        ],
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
            'react/react-in-jsx-scope': 'off',
            'prettier/prettier': 'error',
            'no-console': 'warn',
            'arrow-spacing': 'warn',
            'no-mixed-spaces-and-tabs': 1,
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': 'warn',
        },
    },
);
