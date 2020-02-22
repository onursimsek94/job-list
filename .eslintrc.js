module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
    jest: true,
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  plugins: [
    'vue',
  ],
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    // Only allow debugger in development
    'no-debugger': process.env.PRE_COMMIT ? 'error' : 'off',
    // Only allow `console.log` in development
    'no-console': process.env.PRE_COMMIT
      ? ['error', { allow: ['warn', 'error'] }]
      : 'off',
    'vue/script-indent': ['error', 2, { baseIndent: 1 }],
    'eqeqeq': ['off'],
  },
  overrides: [
    {
      'files': ['*.vue'],
      'rules': {
        'indent': 'off',
        'eqeqeq': ['off'],
      },
    },
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
}
