# @jakubserwin/eslint-config-vue

This package is designed for **Nuxt** and **Vue** projects.

If you are looking for an ESLint config for **Next** and **React** projects, please visit [this URL](https://github.com/jakubserwin/eslint-config).

It provides a custom ESLint configuration, `@jakubserwin/eslint-config-vue`, to help you maintain consistent code style and enforce best practices in your projects including:

- Accessibility
- Recommended Vue3 + TypeScript
- Tailwind
- Prettier
- Sorted imports
- and more..

## Installation

To install the package, follow these steps:

1. Open your terminal or command prompt.
2. Navigate to your project directory.
3. Run one of the following commands based on your preferred package manager:

```shell
# Using pnpm
pnpm i -D @jakubserwin/eslint-config-vue

# Using npm
npm i -D @jakubserwin/eslint-config-vue

# Using yarn
yarn add -D @jakubserwin/eslint-config-vue
```
## Configuration

To configure ESLint to use `@jakubserwin/eslint-config-vue`, follow these steps:

1. Create a `.eslintrc.js` file in the root directory of your project if you don't have one already.
2. Open the `.eslintrc.js` file and add the following code:

   ```javascript
   module.exports = {
     extends: ['@jakubserwin/eslint-config-vue'],
   }
   ```

3. Save the file.

4. Sometimes a **reload** is required in VS Code

## Contributing

Contributions to this ESLint configuration package are welcome! If you have any suggestions, improvements, or bug fixes, please open an issue or submit a pull request on the GitHub repository for this project.

## License

This project is licensed under the [MIT License](LICENSE).