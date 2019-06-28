const path = require('path');

module.exports = {
    entry: './src/app.module.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve('dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/, // which file needs to be read
                exclude: /node_modules/, // which folder needs not to be read
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.sass$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg)$/,
                use: 'file-loader'
            }
        ]
    },
    devServer: {
        port: 3000, // configuring port for localserver
        contentBase: './' // configuring from where content needs to be served
    }
};