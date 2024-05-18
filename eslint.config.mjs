// eslint.config.mjs
import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: globals.node,
    },
    ...pluginJs.configs.recommended,
    rules: {
      'no-console': 'warn',
      // Avoid Bugs
      'no-undef': 'error',
      'semi': 'error',
      'semi-spacing': 'error',
      // Best Practices
      'eqeqeq': 'warn',
      'no-invalid-this': 'error',
      'no-return-assign': 'error',
      'no-unused-expressions': ['error', { 'allowTernary': true }],
      'no-useless-concat': 'error',
      'no-useless-return': 'error',
      'no-constant-condition': 'warn',
      'no-trailing-spaces': 'error',
      'no-unused-vars': ['error', { 'argsIgnorePattern': 'req|res|next|__' }],
      // Enhance Readability
      'indent': ['error', 2, { 'SwitchCase': 1 }],
      'no-mixed-spaces-and-tabs': 'warn',
      'space-before-blocks': 'error',
      'space-in-parens': 'error',
      'space-infix-ops': 'error',
      'space-unary-ops': 'error',
      'quotes': ['error', 'single'],
      //
      'max-len': ['error', { 'code': 100 }],
      'max-lines': ['error', { 'max': 500 }],
      'keyword-spacing': 'error',
      'no-mixed-operators': 'error',
      //
      'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 1 }],
      'no-whitespace-before-property': 'error',
      'nonblock-statement-body-position': 'error',
      'object-property-newline': [
        'error',
        { 'allowAllPropertiesOnSameLine': true }
      ],
      "eol-last": ["error", "always"],
      "comma-dangle": ["error", "always-multiline"],
      // ES6
      'arrow-spacing': 'error',
      'no-confusing-arrow': 'error',
      'no-duplicate-imports': 'error',
      'no-var': 'error',
      'object-shorthand': 'off',
      'prefer-const': 'error',
      'prefer-template': 'warn'
    }
  }
];
