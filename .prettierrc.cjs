/** @type {import("prettier").Config} */
module.exports = {
  singleQuote: true,
  jsxSingleQuote: false,
  semi: false,
  trailingComma: 'es5',
  bracketSpacing: true,
  bracketSameLine: true,
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}
