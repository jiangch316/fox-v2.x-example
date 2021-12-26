/* eslint-disable */
/*
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-08-17 16:22:36
 */
const path = require('path')
const WebpackBar = require('webpackbar')
const {
	CleanWebpackPlugin
} = require('clean-webpack-plugin')
let MiniCssExtractPlugin = require('mini-css-extract-plugin')
let TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const {
	merge
} = require('webpack-merge')

// 配置
let commons = {
	mode: 'production'
}
// 非生产环境生成源代码
if (process.env.NODE_ENV !== 'production') {
	commons = {
		mode: 'development',
		devtool: 'eval-source-map'
	}
}

module.exports = merge(commons, {
	entry: {
		index: path.join(__dirname, '../src/index.ts')
	},
	output: {
		filename: 'index.js',
		path: path.join(__dirname, `../packages/fox/libs`),
		library: 'fox',
		libraryTarget: 'umd',
	},
	externals:['vue', '@fox-js/fox'],
	module: {
		rules: [{
				test: /\.css|less|scss|less$/,
				use: [{
						loader: MiniCssExtractPlugin.loader,
					},
					{
						loader: 'css-loader',
					},
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [
									['postcss-preset-env', {}]
								],
							},
						},
					},
					{
						loader: 'sass-loader',
					},
					{
						loader: 'less-loader',
					},
				],
			},
			{
				test: /\.ts|js$/,
				exclude: /node_modules/,
				use: [{
					loader: 'babel-loader',
				}, ],
			},
			{
				// webpack5 内置了 asset 模块, 用来代替 file-loader & url-loader & raw-loader 处理静态资源
				test: /\.png|jpg|gif|jpeg|svg/,
				type: 'asset',
				parser: {
					dataUrlCondition: {
						maxSize: 10 * 1024,
					},
				},
				generator: {
					filename: 'static/images/[base]',
				},
			},
			{
				test: /\.txt|xlsx/,
				type: 'asset',
				generator: {
					filename: 'static/files/[base]',
				},
			},
		],
	},
	plugins: [
		new WebpackBar(),
		new MiniCssExtractPlugin(),
		new CleanWebpackPlugin({
			path: './packages/fox/libs'
		}),
	],
	resolve: {
		extensions: ['.ts', '.js', '.vue'],
		alias: {
			vue$: 'vue/dist/vue.esm.js',
		},
		plugins: [
			// 将 tsconfig 中配置的路径别名映射到 webpack.resolve.alias 上
			new TsconfigPathsPlugin(),
		],
	},
	optimization: {
		minimize: true,
		usedExports: true, // treeShaking
	},
})