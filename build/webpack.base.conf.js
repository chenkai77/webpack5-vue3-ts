const { resolve, babelLoaderConf } = require("./utils.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const vueLoader = require("vue-loader");
// const Components = require('unplugin-vue-components/webpack')
// const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
  entry: {
    app: resolve("src/index.ts"),
  },
  resolve: {
    extensions: [".js", ".vue", ".json", ".ts", ".tsx", ".mjs"],
    alias: {
      "@": resolve("src"),
    },
  },
  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/, // 不解析库
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: "vue-loader",
          },
        ],
        include: /(src)/,
      },
      {
        test: /\.(ts|js)x?$/,
        use: [babelLoaderConf],
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        loader: "svg-sprite-loader",
        include: [resolve("src/assets/svg")],
        options: {
          symbolId: "icon-[name]",
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
        generator: {
          filename: "images/[base]",
        },
        exclude: [resolve("src/assets/svg")],
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        type: "asset",
        generator: {
          filename: "files/[base]",
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        type: "asset",
        generator: {
          filename: "media/[base]",
        },
      },
      // element-plus
      {
        test: /\.mjs$/,
        include: /node_modules/,
        resolve: {
          fullySpecified: false,
        },
        type: "javascript/auto",
      },
    ],
  },

  plugins: [
    // vue-loader插件
    new vueLoader.VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: resolve("public/index.html"),
      favicon: resolve("public/favicon.ico"),
      inject: true,
    }),
    // element-plus 按需引入
    // Components({
    //   resolvers: [
    //     ElementPlusResolver({
    //       importStyle: false,
    //     }),
    //   ],
    // }),
  ],
};
