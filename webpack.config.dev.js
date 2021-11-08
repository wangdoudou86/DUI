const base = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = Object.assign({}, base, {
    mode: 'development', // 在哪种模式下运行
    plugins: [
        new HtmlWebpackPlugin({
            title: 'DUI',
            template: 'index.html'
        })
    ]
}) 