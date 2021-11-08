const path = require('path') 
module.exports = {
    entry: {
        index: './lib/index.tsx'  //入口文件，index是文件名，可以改成其他的名字
    },
    output: {
        path: path.resolve(__dirname, 'dist/lib')
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
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