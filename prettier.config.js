/** @type {import("prettier").Config} */
const config = {
  printWidth: 100,
  jsxSingleQuote: true,
  bracketSameLine: false,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: true,
  bracketSpacing: true,
  trailingComma: 'all',
  plugins: ['prettier-plugin-tailwindcss'],
}

export default config
