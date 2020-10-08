const path = require("path");

module.exports = {
  entry: "./src/client",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "react",
            "stage-0",
            ["env", { targets: { browser: ["last 2 versions"] } }],
          ],
        },
      },
    ],
  },
};
