const path = require('path') 
module.exports = {
    mode: 'production', // 在哪种模式下运行
    entry: {
        index: './lib/index.tsx'  //入口文件，index是文件名，可以改成其他的名字
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
    }
}