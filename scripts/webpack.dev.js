/*
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-08-15 15:27:08
 */
const path = require('path')
/* eslint-disable */
/*
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-08-25 09:48:38
 */

const {
	merge,
} = require('webpack-merge')
const baseConfig = require('./webpack.base.js')

module.exports = merge(baseConfig, {
	mode: 'development',
	devtool: 'eval-source-map',
	entry: './sites/example/main.js',
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, '../dist'),
	},
	// developement server
	devServer: {
		contentBase: './dist',
		// 启动gzip 压缩
		compress: true,
		// 端口号
		port: 3000,
		// 自动打开浏览器
		open: true,
		// hot
		hot: true,
	},
})