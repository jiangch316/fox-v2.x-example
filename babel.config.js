/*
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-08-19 17:18:25
 */
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage', // or "entry"
        corejs: 3,
        targets: {
          edge: '17',
          firefox: '60',
          chrome: '67',
          safari: '11.1',
          ie: '10',
      },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-transform-modules-commonjs'
  ],
}