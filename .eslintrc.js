module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  parser: 'vue-eslint-parser',
  ignorePatterns: ['*.cjs'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:prettier/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:vuejs-accessibility/recommended',
    '@vue/typescript/recommended',
    'plugin:yml/standard',
  ],
  plugins: ['import', '@typescript-eslint', 'prettier', 'sort-exports'],
  rules: {
    // JavaScript
    'object-shorthand': ['error', 'properties'],
    'array-bracket-spacing': ['error', 'never'],
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-useless-catch': 'error',
    'no-debugger': 'error',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-alert': 'error',

    // Vue
    'vue/html-self-closing': 'off',
    'vue/html-indent': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case',
      {
        registeredComponentsOnly: false,
      },
    ],
    'vue/custom-event-name-casing': ['error', 'kebab-case'],
    'vue/v-bind-style': ['error', 'shorthand'],
    'vue/component-tags-order': [
      'error',
      {
        order: ['script', 'template', 'style'],
      },
    ],
    'vuejs-accessibility/form-control-has-label': 'off',
    'vuejs-accessibility/label-has-for': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/max-attributes-per-line': 'off',

    // TypeScript
    '@typescript-eslint/brace-style': ['error', '1tbs'],
    '@typescript-eslint/member-ordering': [
      'error',
      {
        default: {
          optionalityOrder: 'required-first',
          order: 'alphabetically',
        },
      },
    ],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: false,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/ban-ts-comment': [
      'error',
      { 'ts-ignore': 'allow-with-description' },
    ],
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'array-simple',
        readonly: 'array-simple',
      },
    ],

    // Export
    'sort-exports/sort-exports': ['error', { sortDir: 'asc' }],

    // Import
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],
    'import/export': 'error',
    'import/no-empty-named-blocks': 'error',
    'import/no-cycle': 'error',
    'import/no-useless-path-segments': 'error',
    'import/no-self-import': 'error',
    'import/no-duplicates': ['error', { 'prefer-inline': true }],
    'import/order': [
      'error',
      {
        groups: [
          'external',
          'builtin',
          'internal',
          'sibling',
          'parent',
          'index',
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        // 'newlines-between': 'never',
      },
    ],

    // Prettier
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        jsxSingleQuote: true,
        tabWidth: 2,
        semi: false,
        singleQuote: true,
        bracketSpacing: true,
        arrowParens: 'always',
        trailingComma: 'all',
      },
    ],

    // Tailwind
    'tailwindcss/no-custom-classname': [
      'off',
      {
        ignore: ['i*'],
      },
    ],
  },
}
