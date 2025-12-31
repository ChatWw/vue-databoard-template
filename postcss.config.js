module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 192, // 设计稿宽度的1/10，1920px/10 = 192
      propList: ['*'], // 需要转换的属性，*表示所有属性
      selectorBlackList: [], // 不需要转换的选择器
      replace: true, // 是否替换原有的px值
      mediaQuery: false, // 是否转换媒体查询中的px
      minPixelValue: 0 // 最小转换像素值
    }
  }
}