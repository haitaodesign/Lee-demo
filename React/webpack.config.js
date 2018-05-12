'use strict';
const webpack = require('webpack')
const path = require('path')
const htmlWebpckPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: {
        app:path.join(__dirname,'index.js'),
    },
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: [
                    'es2015',
                    'react'
                ]
            }
        }]
    },
    devtool: 'source-map',
    devServer:{
        port: 8081,
        host: '0.0.0.0',
    },
    plugins: [
        new htmlWebpckPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname,  `index.html`),
            inject: true
        })
    ]
};