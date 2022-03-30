const base = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = Object.assign({}, base, {
    mode: 'development', // 在哪种模式下运行
    entry: {
        example: './example.tsx'  //入口文件，example是文件名，可以改成其他的名字
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'DUI',
            template: 'example.html'
        })
    ]
}) 