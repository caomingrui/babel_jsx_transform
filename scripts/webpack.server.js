const merge = require("webpack-merge").merge;
const webpackBase = require('./webpack.base');

module.exports = merge(webpackBase, {
    devServer: {
        port: '5555',
        compress: true
    },
});
