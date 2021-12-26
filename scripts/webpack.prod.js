/* eslint-disable */
/*
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-08-17 16:22:36
 */
const {
	merge,
} = require('webpack-merge')
const path = require('path')

const baseConfig = require('./webpack.base.js')

module.exports = merge(baseConfig, {
	mode: 'production',
	entry: './sites/example/main.js',
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, '../dist'),
	},
})