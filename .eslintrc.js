const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'indent': ['warn', 2],
    'no-console': isProd ? 'warn' : 'off',
    'no-debugger': isProd ? 'warn' : 'off',
    'no-unused-vars': isProd ? 'error' : 'off',
    'vue/no-unused-components': isProd ? 'error' : 'warn',
    'space-before-function-paren': 'off',
    'vue/max-attributes-per-line': [
      'error',
      {
        'singleline': 1,
        'multiline': {
          'max': 1,
          'allowFirstLine': false
        }
      }
    ],
    'vue/html-indent': ['error', 2, {
      'attribute': 1,
      'baseIndent': 1,
      'closeBracket': 0,
      'alignAttributesVertically': false,
      'ignores': []
    }],
    'vue/script-indent': ['error', 2, {
      'baseIndent': 0,
      'switchCase': 1,
      'ignores': []
    }],
    'vue/html-closing-bracket-newline': ['error', {
      'singleline': 'never',
      'multiline': 'always'
    }],
    'vue/multiline-html-element-content-newline': ['error', {
      'ignoreWhenEmpty': true,
      'ignores': ['pre', 'textarea'],
      'allowEmptyLines': true
    }],
    'vue/singleline-html-element-content-newline': ['error', {
      'ignoreWhenNoAttributes': false,
      'ignoreWhenEmpty': true,
      'ignores': ['pre', 'textarea']
    }],
    'vue/attributes-order': ['error', {
      'order': [
        'DEFINITION',
        'LIST_RENDERING',
        'CONDITIONALS',
        'RENDER_MODIFIERS',
        'GLOBAL',
        'UNIQUE',
        'TWO_WAY_BINDING',
        'OTHER_DIRECTIVES',
        'OTHER_ATTR',
        'EVENTS',
        'CONTENT'
      ],
      'alphabetical': false
    }],
    'vue/mustache-interpolation-spacing': ['warn', 'always']
  },
  'overrides': [
    {
      'files': ['*.vue'],
      'rules': {
        'indent': 'off'
      }
    }
  ]
}
