const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const JSXPlugin = require("../plugins/index")
const htmlPlugin = new HtmlPlugin({
    template: 'public/index.html',
    filename: 'index.html'
})


const baseConfig = {
    mode: 'development',
    devtool: 'source-map',
    entry: ['./main.tsx'],
    resolve: {
        extensions: ['.ts', '.js', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.js|.ts|.tsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [['@babel/preset-env', {
                        targets: {
                            browsers: ['last 2 versions']
                        }
                    }], '@babel/preset-typescript'],
                    plugins: [[JSXPlugin, { "pragma": "h" }]]
                },
            }]
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    plugins: [htmlPlugin]
}


module.exports = baseConfig;
