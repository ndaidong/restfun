// eslint.config.js

import eslintjs from '@eslint/js'
import globals from 'globals'

const ignores = [
  'node_modules/*',
  'storage/*',
]

export default [
  {
    ignores,
    ...eslintjs.configs.recommended,
  },
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.browser,
        Intl: 'readonly',
        Bun: 'readonly',
      },
    },
    ignores,
    rules: {
      'arrow-spacing': ['error', { 'before': true, 'after': true }],
      'block-spacing': ['error', 'always'],
      'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
      'camelcase': ['error', {
        'allow': ['^UNSAFE_'],
        'properties': 'never',
        'ignoreGlobals': true,
      }],
      'comma-dangle': ['error', {
        'arrays': 'always-multiline',
        'objects': 'always-multiline',
        'imports': 'never',
        'exports': 'never',
        'functions': 'never',
      }],
      'comma-spacing': ['error', { 'before': false, 'after': true }],
      'eol-last': 'error',
      'eqeqeq': ['error', 'always', { 'null': 'ignore' }],
      'func-call-spacing': ['error', 'never'],
      'indent': [
        'error',
        2,
        {
          'MemberExpression': 1,
          'FunctionDeclaration': {
            'body': 1,
            'parameters': 2,
          },
          'SwitchCase': 1,
          'ignoredNodes': ['TemplateLiteral > *'],
        },
      ],
      'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],
      'keyword-spacing': ['error', { 'before': true, 'after': true }],
      'lines-between-class-members': ['error', 'always', { 'exceptAfterSingleLine': true }],
      'max-len': [
        'error',
        {
          'code': 120,
          'ignoreTrailingComments': true,
          'ignoreComments': true,
          'ignoreUrls': true,
        },
      ],
      'max-lines': [
        'error',
        {
          'max': 450,
          'skipBlankLines': true,
          'skipComments': false,
        },
      ],
      'max-lines-per-function': [
        'error',
        {
          'max': 250,
          'skipBlankLines': true,
        },
      ],
      'max-params': ['error', 3],
      'no-array-constructor': 'error',
      'no-mixed-spaces-and-tabs': 'error',
      'no-multi-spaces': 'error',
      'no-multi-str': 'error',
      'no-multiple-empty-lines': [
        'error',
        {
          'max': 1,
          'maxEOF': 0,
        },
      ],
      'no-restricted-syntax': [
        'error',
        'WithStatement',
        'BinaryExpression[operator=\'in\']',
      ],
      'no-trailing-spaces': 'error',
      'no-use-before-define': [
        'error',
        {
          'functions': true,
          'classes': true,
          'variables': false,
        },
      ],
      'no-var': 'warn',
      'object-curly-spacing': ['error', 'always'],
      'padded-blocks': [
        'error',
        {
          'blocks': 'never',
          'switches': 'never',
          'classes': 'never',
        },
      ],
      'quotes': ['error', 'single'],
      'space-before-blocks': ['error', 'always'],
      'space-before-function-paren': ['error', 'always'],
      'space-infix-ops': 'error',
      'space-unary-ops': ['error', { 'words': true, 'nonwords': false }],
      'space-in-parens': ['error', 'never'],
      'semi': ['error', 'never'],
    },
  },
]
