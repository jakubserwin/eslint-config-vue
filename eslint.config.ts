import { FlatCompat } from '@eslint/eslintrc'
import jsConfig from './src'

const compat = new FlatCompat()

export default jsConfig(
  {},
  ...compat.config({
    plugins: ['unused-imports', 'prefer-arrow-functions'],
    extends: ['plugin:tailwindcss/recommended'],
    rules: {
      'unused-imports/no-unused-imports': 'error',

      'tailwindcss/no-custom-classname': 'off',

      'prefer-arrow-functions/prefer-arrow-functions': [
        'error',
        {
          allowNamedFunctions: false,
          classPropertiesAllowed: false,
          disallowPrototype: false,
          returnStyle: 'unchanged',
          singleReturnOnly: false,
        },
      ],
    },
  }),
)
