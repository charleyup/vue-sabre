const merge = require("webpack-merge");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const webpackBaseConf = require("./webpack.common.js");

module.exports = merge(webpackBaseConf, {
    entry: "./src/index.js",
    output: {
        filename: "vue-sabre.js",
        path: path.resolve(__dirname, "../dist"),
        library: "vueSabre",
        libraryTarget: 'umd'
    },
    externals: {
        vue: {
          root: 'Vue',
          commonjs: 'vue',
          commonjs2: 'vue',
          amd: 'vue'
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "vue-sabre.css"
        }),
        new CleanWebpackPlugin(["./dist/vue-sabre.js", "./dist/vue-sabre.css"], { root: path.resolve(__dirname, "../")})
    ]
});
