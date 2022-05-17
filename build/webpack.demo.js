const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const merge = require("webpack-merge");
const webpackBaseConf= require("./webpack.common.js");

module.exports = merge(webpackBaseConf, {
    entry: "./examples/main.js",
    output: {
        filename: "js/[name].[hash].js",
        chunkFilename: "js/[name].[chunkhash].js",
        path: path.resolve(__dirname, "../website/demo")
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },
    externals: {},
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(["./website/demo"], { root: path.resolve(__dirname, "../")}),
        new HtmlWebpackPlugin({
            title: "vue-sabre",
            filename: "index.html",
            template: "./examples/index.html",
            favicon: "./examples/assets/images/favicon.ico",
            inject: true
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash].css"
        })
    ],
    devServer: {
        hot: true,
        open: true,
        stats: "errors-only",
        disableHostCheck: true,
        historyApiFallback: true,
        overlay: {
            warnings: true,
            errors: true
        }
    }
});
