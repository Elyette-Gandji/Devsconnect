module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'plugin:editorconfig/recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    // Règles conseillées pour la gestion des erreurs et la prévention de bugs
    "no-console": "off",
    "no-unused-vars": "error",
    "no-undef": "error",
    "no-extra-semi": "error",
    "no-debugger": "error",

    // Règles pour le style de code et la lisibilité
    "indent": ["error", 2],
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "comma-dangle": ["error", "never"],
    "no-trailing-spaces": "error",

    // Règles pour les fonctionnalités ECMAScript
    "no-var": "error",
    "prefer-const": "error",
    "arrow-parens": ["error", "always"],
    "arrow-spacing": "error",
    "prefer-template": "error",

    // Règles pour l'utilisation de la virgule
    "comma-spacing": "error",
    "comma-style": "error",

    // Règles pour les instructions de contrôle de flux
    "curly": ["error", "all"],
    "eqeqeq": "error",

    // Règles pour la gestion des espaces
    "keyword-spacing": "error",
    "space-before-blocks": "error",
    "space-infix-ops": "error",
  },
};
