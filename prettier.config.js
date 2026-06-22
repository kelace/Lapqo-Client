export default {
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
    "prettier-plugin-organize-attributes",
    "prettier-plugin-packagejson",
  ],

  printWidth: 80,
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  trailingComma: "all",

  importOrder: ["^react$", "<THIRD_PARTY_MODULES>", "^@/", "^[./]"],

  importOrderSeparation: true,
};
