const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname + '/dist'),
        filename: 'js/[name].bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'babel-loader']
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name]. [ext]',
                        outputPath: 'images'
                    }
                }
            }
        ]
    }
}