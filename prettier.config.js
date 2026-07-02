export default {
  plugins: ["@ianvs/prettier-plugin-sort-imports"],
  printWidth: 80,
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  trailingComma: "all",
  importOrder: [
    "^react$",
    "<THIRD_PARTY_MODULES>",

    "^@/app(/.*)?$",
    "^@/pages(/.*)?$",
    "^@/widgets(/.*)?$",
    "^@/features(/.*)?$",
    "^@/entities(/.*)?$",
    "^@/shared(/.*)?$",

    "^[./]",
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
};
