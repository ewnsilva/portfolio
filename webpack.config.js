const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === "development";

  return {
    mode: argv.mode || "development",
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "static/js/[name].[contenthash:8].js",
      chunkFilename: "static/js/[name].[contenthash:8].chunk.js",
      clean: true,
    },
    devtool: isDevelopment ? "cheap-module-source-map" : "source-map",
    devServer: {
      port: 3000,
      historyApiFallback: true,
      hot: true,
      compress: true,
    },
    resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js"],
      alias: {
        components: path.resolve(__dirname, "src/components/"),
        pages: path.resolve(__dirname, "src/pages/"),
        context: path.resolve(__dirname, "src/context/"),
        hooks: path.resolve(__dirname, "src/hooks/"),
        utils: path.resolve(__dirname, "src/utils/"),
        assets: path.resolve(__dirname, "src/assets/"),
        translations: path.resolve(__dirname, "src/translations/"),
      },
    },
    module: {
      rules: [
        {
          test: /\.[jt]sx?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  { targets: { browsers: ["last 2 versions"] } },
                ],
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
              plugins: ["@babel/plugin-proposal-private-property-in-object"],
            },
          },
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/,
          type: "asset",
          parser: {
            dataUrlCondition: {
              maxSize: 10 * 1024,
            },
          },
          generator: {
            filename: "static/images/[name].[hash:8][ext]",
          },
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          type: "asset/resource",
          generator: {
            filename: "static/fonts/[name].[hash:8][ext]",
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        favicon: "./public/favicon.ico",
      }),
      new CopyPlugin({
        patterns: [
          { from: "public/manifest.json", to: "manifest.json" },
          { from: "public/logo192.png", to: "logo192.png" },
        ],
      }),
    ],
    performance: {
      hints: isDevelopment ? false : "warning",
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
  };
};
