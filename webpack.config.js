const path = require('path') 
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'production', // 在哪种模式下运行
    entry: {
        win: './lib/index.tsx'  //入口文件，index是文件名，可以改成其他的名字
    },
    output: {
        path: path.resolve(__dirname, 'dist/lib')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'DUI',
            template: 'index.html'
        })
    ]
}