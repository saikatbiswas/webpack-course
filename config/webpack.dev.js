const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader")

module.exports = {
  entry: {
    main: ["core-js/fn/promise","./src/main.js"]
  },
  mode: "development",
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/"
  },
  devServer: {
    contentBase: "dist",
    overlay: true,
    hot: true,
    stats: {
      colors: true
    }
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test:/\.js$/,
        use:[
          {loader:"babel-loader"}
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" }, 
          { 
            loader: "css-loader",
            query:{
              modules: true, //Import css as module import style from"/style.css" className="style.my-class"
              localIdentName: "[name]--[local]--[hash:4]"

            }
          }
        ]
      },
      {
        test:/\.vue$/,
        use:[
          {
            loader:"vue-loader",
            options: {
              reactivityTransform: true
            }
          },
        ],
        
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.less$/i,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
          "less-loader",
        ],
      },
      {
        test: /\.styl$/i,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
          "stylus-loader",
        ],
      },
      {
        test: /\.jpg$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), 
    new HTMLWebpackPlugin({
      template: "./src/index.html"
    }),
    new VueLoaderPlugin()
  ]

  // For EJS
  // plugins: [
  //   new webpack.HotModuleReplacementPlugin(), 
  //   new HTMLWebpackPlugin({
  //     template: "./src/index.ejs",
  //     title:"Ejs html"
  //   })
  // ]
}
