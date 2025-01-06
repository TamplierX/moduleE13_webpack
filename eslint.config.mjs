import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]
  },
  {
    ignores: [
      'dist/*',
      'node_modules/*',
      'webpack.config.js',
      'webpack.dev.js',
      'webpack.prod.js',
      'prettier.config.js',
    ],
  },
  {
    languageOptions: { 
      globals: globals.browser 
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];