const merge = require("webpack-merge");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const webpackBaseConf = require("./webpack.common.js");

let entry = {};

const packages = require("../src/config.json").packages;
packages.forEach(item => {
    const pkg = item.name.toLowerCase();
    entry[pkg] = `./src/packages/${pkg}/index.js`;
});

module.exports = merge(webpackBaseConf, {
    entry,
    output: {
        filename: "[name]/index.js",
        path: path.resolve(__dirname, "../dist/packages"),
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
            filename: "[name]/style.css"
        }),
        new CleanWebpackPlugin(["./dist/packages"], { root: path.resolve(__dirname, "../")})
    ]
});
