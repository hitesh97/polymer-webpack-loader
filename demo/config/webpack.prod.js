const webpackMerge = require('webpack-merge');
const webpackMergeDll = webpackMerge.strategy({plugins: 'replace'});
const helpers = require('./helpers');
const cfg = require('./configuration');
const commonConfig = require('./webpack.common');

// Webpack Plugins
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

// Webpack Constants
const ENV = process.env.ENV = process.env.NODE_ENV = cfg.Env.PRODUCTION;
const HOST = process.env.HOST || cfg.Host.LOCALHOST;
const PORT = process.env.PORT || cfg.Port.CLIENT;
const METADATA = webpackMerge(commonConfig({ env: ENV }).metadata, {
    host: HOST,
    port: PORT,
    ENV: ENV,
    HMR: false
});

// Webpack Configuration
//TODO: override / add anything that we need to do for PROD build!
module.exports = function (options) {
    return webpackMerge(commonConfig({ env: ENV }), {
    });
};
