const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    static: "./src/code/static.js",
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name]-bundle.js"
  },
  resolve: {
    modules: ["node_modules"]
  },
  module: {
    rules: [
      {
        test: /\.(png|gif)$/,
        use: "url-loader"
      },
      {
        test: /\.css$/,
        use: ["to-string-loader", "css-loader"]
      },
    ]
  }
};
