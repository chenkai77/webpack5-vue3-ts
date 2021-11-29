module.exports = {
  defaultSeverity: 'warn',
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order', // 属性排序规则
  ],
  plugins: ['stylelint-scss', 'stylelint-order'],
  rules: {
    'no-invalid-double-slash-comments': null, // 允许双斜杠注释
    'custom-property-no-missing-var-function': null,
    'string-quotes': null,
    'no-empty-source': null,
    'selector-class-pattern': null,
    'alpha-value-notation': null, // 允许小数
    'color-function-notation': null, // 允许rgb颜色
    'media-feature-name-no-vendor-prefix': true, // 不允许媒体特性名称的前缀, 插件自动添加
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['deep'], // 忽略deep伪元素
      },
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'mixin',
          'include',
          'if',
          'else',
          'extend',
          'for',
          '$',
          'forward',
          'use',
        ], // 忽略规则
      },
    ],
  },
}
