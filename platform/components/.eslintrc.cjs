/* eslint-env node */

module.exports = {
  root: true,
  plugins: [
    '@typescript-eslint',
    'wc',
    'lit',
    'lit-a11y',
    'chai-expect',
    'chai-friendly',
    'import',
    'sort-imports-es6-autofix'
  ],
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:wc/recommended',
    'plugin:wc/best-practice',
    'plugin:lit/recommended',
    'plugin:lit-a11y/recommended',
    'plugin:storybook/recommended'
  ],
  env: {
    es2021: true,
    browser: true
  },
  parserOptions: {
    sourceType: 'module'
  },
  overrides: [
    {
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
        project: './tsconfig.json',
        tsconfigRootDir: __dirname
      },
      files: ['*.ts'],
      rules: {
        'default-param-last': 'off',
        '@typescript-eslint/default-param-last': 'error',
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': 'warn',
        'no-implied-eval': 'off',
        '@typescript-eslint/no-implied-eval': 'error',
        'no-invalid-this': 'off',
        '@typescript-eslint/no-invalid-this': 'error',
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'error',
        'no-throw-literal': 'off',
        '@typescript-eslint/no-throw-literal': 'error',
        'no-unused-expressions': 'off',
        '@typescript-eslint/prefer-regexp-exec': 'off',
        '@typescript-eslint/no-unused-expressions': 'error',
        '@typescript-eslint/unbound-method': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-misused-promises': [
          'error',
          {
            checksVoidReturn: false
          }
        ],
        '@typescript-eslint/consistent-type-assertions': [
          'warn',
          {
            assertionStyle: 'as',
            objectLiteralTypeAssertions: 'never'
          }
        ],
        '@typescript-eslint/consistent-type-imports': 'warn',
        '@typescript-eslint/no-base-to-string': 'error',
        '@typescript-eslint/no-confusing-non-null-assertion': 'error',
        '@typescript-eslint/no-invalid-void-type': 'error',
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'warn',
        '@typescript-eslint/no-unnecessary-condition': 'off',
        '@typescript-eslint/no-unnecessary-qualifier': 'warn',
        '@typescript-eslint/non-nullable-type-assertion-style': 'warn',
        '@typescript-eslint/prefer-for-of': 'warn',
        '@typescript-eslint/prefer-optional-chain': 'warn',
        '@typescript-eslint/prefer-ts-expect-error': 'warn',
        '@typescript-eslint/prefer-return-this-type': 'error',
        '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
        '@typescript-eslint/require-array-sort-compare': 'error',
        '@typescript-eslint/unified-signatures': 'warn',
        '@typescript-eslint/array-type': 'warn',
        '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],
        '@typescript-eslint/member-delimiter-style': 'warn',
        '@typescript-eslint/method-signature-style': 'warn',
        '@typescript-eslint/no-extraneous-class': 'error',
        '@typescript-eslint/no-redundant-type-constituents': 'off',
        '@typescript-eslint/parameter-properties': 'error',
        '@typescript-eslint/strict-boolean-expressions': 'off'
      }
    },
    {
      files: ['**/*.cjs'],
      env: {
        node: true
      }
    },
    {
      extends: ['plugin:chai-expect/recommended', 'plugin:chai-friendly/recommended'],
      files: ['*.test.ts'],
      rules: {
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unused-expressions': 'off'
      }
    }
  ],
  rules: {
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1,
        "VariableDeclarator": 1,
        "outerIIFEBody": 1,
        "MemberExpression": 1,
        "FunctionDeclaration": {
          "parameters": 1,
          "body": 1
        },
        "FunctionExpression": {
          "parameters": 1,
          "body": 1
        },
        "CallExpression": {
          "arguments": 1
        },
        "ArrayExpression": 1,
        "ObjectExpression": 1,
        "ImportDeclaration": 1,
        "flatTernaryExpressions": false,
        "ignoreComments": false,
        "ignoredNodes": [
          "TemplateLiteral *",
          "JSXElement",
          "JSXElement > *",
          "JSXAttribute",
          "JSXIdentifier",
          "JSXNamespacedName",
          "JSXMemberExpression",
          "JSXSpreadAttribute",
          "JSXExpressionContainer",
          "JSXOpeningElement",
          "JSXClosingElement",
          "JSXFragment",
          "JSXOpeningFragment",
          "JSXClosingFragment",
          "JSXText",
          "JSXEmptyExpression",
          "JSXSpreadChild"
        ],
        "offsetTernaryExpressions": true
      }
    ],
    'no-template-curly-in-string': 'error',
    'array-callback-return': 'error',
    'comma-dangle': 'off',
    'consistent-return': 'error',
    curly: 'off',
    'default-param-last': 'error',
    eqeqeq: 'error',
    'lit-a11y/click-events-have-key-events': 'off',
    'no-constructor-return': 'error',
    'no-empty-function': 'warn',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-floating-decimal': 'error',
    'no-implicit-coercion': 'off',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-invalid-this': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-proto': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'warn',
    'no-sequences': 'warn',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': 'warn',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-return': 'warn',
    'prefer-promise-reject-errors': 'error',
    radix: 'off',
    'require-await': 'error',
    'wrap-iife': ['warn', 'inside'],
    'no-shadow': 'error',
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-multi-assign': 'warn',
    'no-new-object': 'error',
    'no-useless-computed-key': 'warn',
    'no-useless-rename': 'warn',
    'no-var': 'error',
    'prefer-const': 'warn',
    'prefer-numeric-literals': 'warn',
    'prefer-object-spread': 'warn',
    'prefer-rest-params': 'warn',
    'prefer-spread': 'warn',
    'prefer-template': 'off',
    'no-else-return': 'off',
    'func-names': ['warn', 'never'],
    'one-var': ['warn', 'never'],
    'operator-assignment': 'warn',
    'prefer-arrow-callback': 'warn',
    'no-restricted-imports': [
      'warn',
      {
        paths: [
          {
            name: '.',
            message: 'Usage of local index imports is not allowed.'
          },
          {
            name: './index',
            message: 'Import from the source file instead.'
          }
        ]
      }
    ],
    'sort-imports-es6-autofix/sort-imports-es6': [
      2,
      {
        ignoreCase: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
      }
    ],
    'wc/guard-super-call': 'off',
    'import/no-duplicates': 'warn',
    'max-len': [
      'error',
      {
        'ignoreComments':  true,
        'code': 120
      }
    ],
    'import/extensions': [
      'error',
      'always',
      {
        ignorePackages: true,
        pattern: {
          js: "always",
          ts: "never"
        }
      }
    ],
    'import/no-unresolved': 'off',
    'import/order': 'off',
    'import/no-extraneous-dependencies': 'off',
    "import/prefer-default-export": "off",
    'class-methods-use-this': 'off',
    'no-param-reassign': 'off',
    'no-return-assign': 'off',
  }
};