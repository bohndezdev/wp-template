const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');


const template = process.env.TEMPLATE;

if (!template) {
  return console.error('You must to add a TEMPLATE name.');
}

module.exports = {
  entry: ['./src/js/index.js', './src/scss/styles.scss'],
  output: {
    filename: 'js/js.bundle.js',
    path: path.join(__dirname, `/wp-content/themes/${template}/assets/`)
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'url-loader'
      },
      {
        test: /\.css$/,
        use: [
          {loader: 'css-loader'}
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'css/[name].bundle.css',
            }
          },
          {
            loader: 'extract-loader'
          },
          {
            loader: 'css-loader?-url'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }

    ]
  },
  plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      }),
  ],
}
