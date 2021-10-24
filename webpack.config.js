const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
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
        }),
        new CleanWebpackPlugin()
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
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                exclude: /node_modules/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/[name].[ext]'
                }
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: 'html-loader',
                generator: {
                    filename: 'assets/images/[name].[ext]'
                }
            }
        ]
    }
}