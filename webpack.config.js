const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const precss = require('precss');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
    entry: {
        home: './src/js/home.js',
        login: './src/js/login.js',
        signup: './src/js/signup.js'
    },
    optimization: {
        minimizer: [
          new UglifyJsPlugin({
            cache: true,
            parallel: true,
            sourceMap: false // set to true if you want JS source maps
          }),
          new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        // new CleanWebpackPlugin(['dist']), //not needed yet becuase it deletes stuff that we don't want
        new HtmlWebpackPlugin({
            filename: 'home.html',
            template: 'src/home.html',
            chunks: ['home'],
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: 'login.html',
            template: 'src/login.html',
            chunks: ['login'],
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: 'signup.html',
            template: 'src/signup.html',
            chunks: ['signup'],
            inject: false
        }),

        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "[id].css"
        }),
    ],

    module: {
        rules: [
            // // For every file type that you want to run through a compiler or transpiler you use test 
            // // and then the task runners array under use: []
            // Run any of the following files through the defined task runner under use: [] which currently is file-loader
            // {
            //     test: /\.html$/,
            //     use: [{ loader: "html-loader", options: { minimize: true } }]
            //    },
            {
                test: /\.(png|jp(e*)g|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8000, // Convert images < 8kb to base64 strings
                        name: 'images/[hash]-[name].[ext]',
                        publicPath: '../'
                    }
                }]
            },

            {
                test: /\.svg/,
                use: {
                    loader: 'svg-url-loader',
                    options: {
                        limit: 1000, // Convert images < 8kb to base64 strings
                        name: 'images/[hash]-[name].[ext]'
                    }
                }
            },

            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "resolve-url-loader",
                    "sass-loader"
                ]
            },


            // Run fonts through file loader too
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[hash].[ext]',
                        publicPath: '../'
                    }
                }
            },

            

        ]
    },
    // devServer: {
    //   contentBase: path.join(__dirname, "dist"),
    //   compress: true,
    //   port: 9000
    // },
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
};