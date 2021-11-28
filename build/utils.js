const path = require("path");

exports.resolve = function (dir) {
  return path.join(__dirname, "..", dir);
};

// babel-loader配置
exports.babelLoaderConf = {
  loader: "babel-loader",
  options: {
    presets: [
      [
        "@babel/preset-env",
        {
          targets: {
            browsers: ["ie>=8", "chrome>=62"],
            node: "8.9.0",
          },
          debug: false,
          useBuiltIns: "usage",
          corejs: "3.0",
        },
      ],
      [
        "@babel/preset-typescript",
        {
          allExtensions: true, // 支持所有文件扩展名，否则在vue文件中使用ts会报错
        },
      ],
    ],
    plugins: [
      [
        "@babel/plugin-transform-runtime",
        {
          corejs: 3,
        },
      ],
    ],
  },
};
