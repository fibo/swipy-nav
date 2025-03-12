import js from '@eslint/js'
import globals from 'globals'
import stylistic from '@stylistic/eslint-plugin'
import tseslint from 'typescript-eslint'

const stylisticRules = {
  '@stylistic/array-bracket-newline': ['error', 'consistent'],
  '@stylistic/array-bracket-spacing': 'error',
  '@stylistic/array-element-newline': ['error', { 'consistent': true, 'multiline': true }],
  '@stylistic/arrow-parens': ['error', 'always'],
  '@stylistic/arrow-spacing': 'error',
  '@stylistic/block-spacing': 'error',
  '@stylistic/brace-style': 'error',
  '@stylistic/comma-dangle': ['error', 'only-multiline'],
  '@stylistic/comma-spacing': 'error',
  '@stylistic/comma-style': 'error',
  '@stylistic/computed-property-spacing': 'error',
  '@stylistic/function-call-argument-newline': ['error', 'consistent'],
  '@stylistic/function-call-spacing': 'error',
  '@stylistic/implicit-arrow-linebreak': 'error',
  '@stylistic/indent': ['error', 2],
  '@stylistic/key-spacing': 'error',
  '@stylistic/keyword-spacing': 'error',
  '@stylistic/no-extra-semi': 'error',
  '@stylistic/no-mixed-spaces-and-tabs': 'error',
  '@stylistic/no-multi-spaces': 'error',
  '@stylistic/no-multiple-empty-lines': ['error', { 'max': 1 }],
  '@stylistic/no-trailing-spaces': 'error',
  '@stylistic/no-whitespace-before-property': 'error',
  '@stylistic/nonblock-statement-body-position': 'error',
  '@stylistic/object-curly-newline': ['error',
    {
      'ExportDeclaration': 'never',
      'ImportDeclaration': 'never',
      'ObjectExpression': { 'consistent': true },
      'ObjectPattern': { 'consistent': true },
    }],
  '@stylistic/object-curly-spacing': ['error', 'always'],
  '@stylistic/padded-blocks': ['error', 'never'],
  '@stylistic/quotes': ['error', 'single', { 'avoidEscape': true }],
  '@stylistic/semi': ['error', 'never'],
  '@stylistic/space-in-parens': ['error', 'never'],
  '@stylistic/space-infix-ops': 'error',
  '@stylistic/space-unary-ops': 'error',
  '@stylistic/template-tag-spacing': 'error',
  '@stylistic/type-annotation-spacing': 'error',
  '@stylistic/type-generic-spacing': 'error',
  '@stylistic/type-named-tuple-spacing': 'error',
}

const stylisticJsxRules = {
  '@stylistic/jsx-closing-bracket-location': 'error',
  '@stylistic/jsx-closing-tag-location': 'error',
  '@stylistic/jsx-curly-brace-presence': ['error', { children: 'never', propElementValues: 'always', props: 'never' }],
  '@stylistic/jsx-curly-spacing': 'error',
  '@stylistic/jsx-equals-spacing': 'error',
  '@stylistic/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
  '@stylistic/jsx-indent': ['error', 2],
  '@stylistic/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],
  '@stylistic/jsx-props-no-multi-spaces': 'error',
  '@stylistic/jsx-quotes': ['error', 'prefer-double'],
  '@stylistic/jsx-self-closing-comp': 'error',
  '@stylistic/jsx-sort-props': ['error', { 'reservedFirst': true, 'shorthandFirst': true }],
  '@stylistic/jsx-tag-spacing': 'error',
  '@stylistic/jsx-wrap-multilines': ['error',
    {
      assignment: 'parens-new-line',
      condition: 'parens-new-line',
      declaration: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'ignore',
      propertyValue: 'parens-new-line',
      return: 'parens-new-line',
    }],
}

export default tseslint.config(
  {
    ignores: [
      'dist',
      'playwright-report',
      'playwright/.cache',
      'test-results',
    ],
  },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
    ],
    files: ['**/*.{js,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      ...stylisticRules,
      ...stylisticJsxRules,
    },
  },
)
