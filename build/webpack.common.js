const webpack = require("webpack");
const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");

const ENV = process.env.NODE_ENV || "development";
const __LOCAL__ = ENV === "localhost";

module.exports = {
    mode: __LOCAL__ ? "development" : "production",

    resolve: {
        extensions: ['.js', '.vue', '.json', ".css"],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.join(__dirname, "..", 'src')
        }
    },
    // devtool: __LOCAL__ ? "eval-cheap-module-source-map" : "hidden-source-map",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    __LOCAL__ ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader"
                ]
            },
            {
                test: /\.less$/,
                use: [
                    __LOCAL__ ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "less-loader"
                ]
            },
            {
                test: /\.(eot|woff|woff2|ttf)(\?\S*)?$/,
                use: ["url-loader"]
            },
            {
                test: /\.(svg|png|jpe?g|gif|mp4|webm)(\?\S*)?$/,
                use: ["url-loader"]
            },
            {
                test: /\.vue$/,
                use: ["vue-loader"]
            },
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                enforce: 'pre',
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            }
        ]
    },
    performance: {
        hints: false
    },
    stats: {
        children: false,
        modules: false
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                //因为使用热加载，所以在开发状态下可能传入的环境变量为空
                NODE_ENV: JSON.stringify(process.env.NODE_ENV || "development")
            }
        }),
        new VueLoaderPlugin(),
        new ProgressBarPlugin()
    ]
}
