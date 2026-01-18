import js from '@eslint/js';
import typescriptEslint from 'typescript-eslint';
import vuePlugin from 'eslint-plugin-vue';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

const config = [
  js.configs.recommended,
  ...typescriptEslint.configs.recommended,
  ...vuePlugin.configs['flat/essential'],
  {
    files: ['**/*.vue', '**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    ignores: [
      'node_modules/',
      'dist/',
      '.vscode/',
      'auto-imports.d.ts',
      'components.d.ts',
      '*.d.ts'
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: vuePlugin.parseForESLint,
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.vue'],
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        getCurrentPages: true,
        NodeJS: true
      }
    },
    plugins: {
      'simple-import-sort': simpleImportSort
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'vue/multi-word-component-names': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'no-prototype-builtins': 'off',
      'no-empty': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      'no-useless-escape': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      'no-undef': 'off'
    }
  }
];

export default config;
