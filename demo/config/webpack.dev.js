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
const ENV = process.env.ENV = process.env.NODE_ENV = cfg.Env.DEVELOPMENT;
const HOST = process.env.HOST || cfg.Host.LOCALHOST;
const PORT = process.env.PORT || cfg.Port.CLIENT;
const HMR = helpers.isHMR();
const METADATA = webpackMerge(commonConfig({ env: ENV }).metadata, {
    host: HOST,
    port: PORT,
    ENV: ENV,
    HMR: HMR
});

// Webpack Configuration
module.exports = function (options) {
    return webpackMerge(commonConfig({ env: ENV }), {
        devServer: {
            port: METADATA.port,
            host: METADATA.host,
            historyApiFallback: true,
            watchOptions: {
                aggregateTimeout: 300,
                poll: 1000
            }
        }
    });
};
