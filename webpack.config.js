const webpack = require('webpack');
const path = require('path');

const configEnv = require('./config.env');

module.exports = {
    devtool: 'source-map',
    mode: configEnv.mode,
    entry: [
        'webpack-hot-middleware/client',
        './client/index.jsx',
    ],
    output: {
        path: path.resolve(__dirname, 'client/public'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
                    presets: [ "@babel/preset-env", "@babel/preset-react" ],
                    plugins: [ "react-hot-loader/babel" ],
                },
            },
            {
                test: /\.(css)$/,
                use: [ "style-loader", "css-loader" ],
            },
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        static: path.resolve(__dirname, 'client/public'),
    },
};
