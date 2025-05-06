module.exports = {
  // Define the root of the project
  root: true,
  // Define where to apply different configs
  overrides: [
    // Configuration for TypeScript files
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
      ],
      plugins: ["@typescript-eslint"],
      parserOptions: {
        sourceType: "module",
        ecmaVersion: 2022,
      },
      rules: {
        // TypeScript specific rules
        "@typescript-eslint/no-unused-vars": ["error", {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_"
        }],
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-explicit-any": "warn",
      }
    },
    // Configuration for Astro files
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      extends: [
        "eslint:recommended",
        "plugin:astro/recommended",
      ],
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
        sourceType: "module",
        ecmaVersion: 2022,
      },
      rules: {
        // Astro-specific rules
        "astro/no-conflict-set-directives": "error",
        "astro/no-unused-define-vars-in-style": "error"
      }
    },
    // JavaScript files
    {
      files: ["*.js"],
      extends: ["eslint:recommended"],
      parserOptions: {
        sourceType: "module",
        ecmaVersion: 2022,
      },
      env: {
        browser: true,
        node: true,
        es2022: true,
      }
    }
  ],
  // Global settings
  env: {
    browser: true,
    node: true,
    es2022: true,
  },
  rules: {
    // Common rules for all files
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "no-unused-vars": ["error", {
      argsIgnorePattern: "^_",
      varsIgnorePattern: "^_"
    }],
    "no-duplicate-imports": "error",
    "prefer-const": "error",
  },
  settings: {
    // To resolve Astro imports
    "import/resolver": {
      node: {
        extensions: [".js", ".ts", ".tsx", ".astro"]
      }
    }
  }
};

