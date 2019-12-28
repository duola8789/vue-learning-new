/**
 * Created by zh on 2019/12/27.
 */
// stylelint规则集：https://stylelint.io/user-guide/rules
// stylelint-config-standard扩展规则集：https://github.com/stylelint/stylelint-config-standard
module.exports = {
  'extends': 'stylelint-config-standard',
  'rules': {
    // 颜色值避免直接使用颜色名
    'color-named': [
      'never', {
        ignore: ['inside-function']
      }
    ],
    // 使用数字或命名的 (可能的情况下) font-weight 值
    'font-weight-notation': null,
    // 在函数的逗号之后要求有一个换行符或禁止有空白
    'function-comma-newline-after': null,
    // 在函数的括号内要求有一个换行符或禁止有空白
    'function-parentheses-newline-inside': null,
    // url使用引号
    'function-url-quotes': 'always',
    // 禁止小于 1 的小数的前导 0
    'number-leading-zero': 'never',
    // 字符串使用单引号
    'string-quotes': 'single',
    // 要求选择器列表的逗号之前有一个换行符
    'selector-list-comma-newline-before': 'never-multi-line',
    // 在媒体查询的逗号之前禁止有一换行
    'media-query-list-comma-newline-before': 'never-multi-line',
    // 缩进
    'indentation': 2,
    // 禁止低优先级的选择器出现在高优先级的选择器之后
    'no-descending-specificity': null,
    // 禁止空源
    'no-empty-source': null,
    // 禁止缺少文件末尾的换行符
    'no-missing-end-of-source-newline': null
  }
};
