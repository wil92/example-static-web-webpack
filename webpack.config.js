const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
    entry: './main.js',
    mode: 'development',
    output: {
        path: `${__dirname}/dist`,
        filename: 'bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My App',
            filename: 'index.html',
            template: 'index.html',
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
            watch: true,
        },
        port: !!process.env.PORT ? process.env.PORT : 9000,
        hot: true,
        liveReload: true
    }
};
