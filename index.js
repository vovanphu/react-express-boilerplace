const express = require('express');

const configEnv = require('./config.env');
const app = express();

// Setup webpack dev middlewares
if (configEnv.mode == 'development') {
    const webpack = require('webpack');
    const webpackDev = require('webpack-dev-middleware');
    const webpackHot = require('webpack-hot-middleware');
    const configWebpack = require('./webpack.config.js')
    const compiler = webpack(configWebpack);
    
    app.use(webpackDev(compiler));
    app.use(webpackHot(compiler));
}

// Setup static server
app.use('/', express.static('./client/public'));

app.listen(configEnv.port, () => {
    console.log(`Server is running on port ${configEnv.port}`);
});
