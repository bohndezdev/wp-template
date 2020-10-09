const path = require('path');

const webpack = require('webpack');

const template = process.env.TEMPLATE;

if (!template) {
  return console.error('You must to add a TEMPLATE name.');
}

module.exports = {
  entry: ['./src/js/index.ts', './src/scss/styles.scss'],
  output: {
    filename: 'js/js.bundle.js',
    path: path.join(__dirname, `/wp-content/themes/${template}/assets/`)
  },
  resolve: {
    extensions: [ '.tsx', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'url-loader'
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
          },
          {
            loader: 'postcss-loader'
          }
        ]
      },

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
