module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  // extends: 'airbnb-base',
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  globals: {
    __static: true
  },
  plugins: [
    'html',
    'standard',
    'vue'
  ],
  'rules': {
    // 'global-require': 0,
    // 'import/no-unresolved': 0,
    // 'no-param-reassign': 0,
    // 'no-shadow': 0,
    // 'import/extensions': 0,
    // 'import/newline-after-import': 0,
    // 'no-multi-assign': 0,

    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
