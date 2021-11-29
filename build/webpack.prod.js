const { merge } = require('webpack-merge')
const webpack = require('webpack')
const { resolve } = require('./utils.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // 将CSS文件抽取出来配置, 防止将样式打包在 js 中文件过大和因为文件大网络请求超时的情况。
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin') // 对CSS文件进行压缩
const TerserPlugin = require('terser-webpack-plugin')
const common = require('./webpack.base.conf')
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = function (env, argv) {
  const nodeEnv = env.test ? 'test' : env.dev ? 'development' : 'production'
  const analyzerPlugins = env.analyzer
    ? [
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          openAnalyzer: false,
          //   generateStatsFile: true,
          reportFilename: resolve('./report/report.html'),
          statsFilename: resolve('./report/stats.json'),
        }),
      ]
    : []
  return merge(common, {
    mode: 'production',
    optimization: {
      // chunk拆分
      splitChunks: {
        chunks: 'all', // 三个枚举值： async 异步加载导入的模块 import('module').then() ; initial 直接import导入的模块 ; all 包含上述两种情况
        minSize: 20000, // 生成chunk最小的大小
        enforceSizeThreshold: 50000, // 当chunk的大小超过此值将强制拆分
      },
      // 压缩
      minimize: true,
      minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
      // tree shaking
      usedExports: true,
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: false,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  // postcss-preset-env 内部集成了 autoprefixer 添加css第三方前缀
                  plugins: ['postcss-preset-env'],
                },
              },
            },
            {
              loader: 'sass-loader',
              options: {
                additionalData: `
                  @use "@/styles/variables.scss" as *;
                  @use "@/styles/mixin.scss" as *;
                `,
              },
            },
          ],
        },
      ],
    },
    plugins: [
      // 清空dist
      new CleanWebpackPlugin(),
      // css抽离
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash].css',
        chunkFilename: 'css/[name].[contenthash].css',
      }),
      // css压缩
      new CssMinimizerPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(nodeEnv),
        __VUE_OPTIONS_API__: true,
        __VUE_PROD_DEVTOOLS__: false,
      }),
      ...analyzerPlugins,
    ],
    output: {
      path: resolve('dist'),
      filename: 'js/[name].[hash].js',
      chunkFilename: 'js/[name].[hash].js',
    },
  })
}
