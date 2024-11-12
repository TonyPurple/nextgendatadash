module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "next/core-web-vitals",
    "next/typescript",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    // Custom ESLint rules
  },
};
