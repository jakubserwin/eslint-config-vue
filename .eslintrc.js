module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  parser: 'vue-eslint-parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:prettier/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:vuejs-accessibility/recommended',
    '@vue/typescript/recommended',
  ],
  plugins: ['import', '@typescript-eslint', 'prettier'],
  rules: {
    // Base
    'object-shorthand': ['error', 'properties'],
    'array-bracket-spacing': ['error', 'never'],

    // Vue
    'vue/html-self-closing': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/custom-event-name-casing': ['error', 'kebab-case'],
    'vue/v-bind-style': ['error', 'shorthand'],
    'vue/component-tags-order': [
      'error',
      {
        order: ['script', 'template', 'style'],
      },
    ],
    'vuejs-accessibility/form-control-has-label': 'off',

    // TypeScript
    '@typescript-eslint/member-ordering': [
      'error',
      {
        interfaces: {
          optionalityOrder: 'required-first',
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
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/ban-ts-comment': [
      'error',
      { 'ts-ignore': 'allow-with-description' },
    ],
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'array-simple',
        readonly: 'array-simple',
      },
    ],
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          Ref: 'Use ref<type>',
          ComputedRef: 'Use computed<type>',
        },
      },
    ],

    // Import
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],
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
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
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
        arrowParens: 'avoid',
      },
    ],
  },
  overrides: [
    {
      files: ['**/pages/**/*.vue', '**/layouts/**/*.vue'],
      rules: {
        'vue/multi-word-component-names': 'off',
      },
    },
  ],
}
