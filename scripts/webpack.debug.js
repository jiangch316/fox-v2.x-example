/* eslint-disable indent */

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const WebpackBar = require('webpackbar')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const {
  CleanWebpackPlugin,
} = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: './sites/example/main.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [{
        test: /\.ts|js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
        }],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.((c|sa|sc)ss)$/i,
        use: [{
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
          {
            loader: 'less-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('postcss-preset-env')()],
              },
            },
          },
        ],
      },
      {
        test: /\.html$/i,
        // 处理html文件的img图片(负责引入img,从而能被url-loader进行处理)
        loader: 'html-loader',
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/images/[hash][ext][query]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/font/[hash][ext][query]',
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new WebpackBar(),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './sites/example/index.html',
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  resolve: {
    // 配置省略文件路径的后缀名
    extensions: ['.vue', '.tsx', '.ts', '.js'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@site': path.resolve(__dirname, '..', 'sites'),
    },
    plugins: [
      // 将 tsconfig 中配置的路径别名映射到 webpack.resolve.alias 上
      new TsconfigPathsPlugin(),
    ],
  },
  // developement server
  devServer: {
    contentBase: './dist',
    // 启动gzip 压缩
    compress: true,
    // 端口号
    port: 3600,
    // 自动打开浏览器
    open: true,
    // hot
    hot: true,
  },
}