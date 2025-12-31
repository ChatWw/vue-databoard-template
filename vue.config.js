const { defineConfig } = require('@vue/cli-service')
const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = defineConfig({
    lintOnSave: false,
    transpileDependencies: true,
    pages: {
        index: {
            entry: 'src/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            title: '[vren] vue2 大屏模板'
        }
    },
    chainWebpack: (config) => {
        // ✅ 正确做法：排除 icon-svg，不让默认 svg 规则处理
        config.module.rule('svg').exclude.add(resolve('src/assets/icon/svg-icon')).end()

        // ✅ 新增 sprite 规则
        config.module
            .rule('icons') // 名字可以自定义
            .test(/\.svg$/)
            .include.add(resolve('src/assets/icon/svg-icon'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
    },
    devServer: {
        hot: true,
        port: 9000,
        proxy: {
            '/api': {
                target: '192.168.0.1:17000',
                ws: true,
                changeOrigin: true
            }
        }
    }
})
