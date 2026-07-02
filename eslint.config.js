import js from "@eslint/js";
import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript";
import importX from "eslint-plugin-import-x";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [js.configs.recommended, tseslint.configs.recommended],

    plugins: {
      "import-x": importX,
    },
    settings: {
      "import-x/resolver-next": [createTypeScriptImportResolver()],
    },

    rules: {
      "import-x/no-unresolved": "error",
    },

    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
]);
