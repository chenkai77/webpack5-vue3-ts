module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  parserOptions: {
    parser: '@typescript-eslint/parser', // 解析 .vue 文件里面的 script 标签
    sourceType: 'module',
    ecmaVersion: 12,
  },
  plugins: ['vue', '@typescript-eslint'],
  extends: ['plugin:vue/recommended', 'plugin:prettier/recommended'],
  rules: {
    indent: ['warn', 2], //缩进风格
    'vue/require-default-prop': off, // 允许className做prop
  },
}
