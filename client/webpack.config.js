const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    clean: true,
    assetModuleFilename: 'images/[name][ext]',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
        include: /\.module\.css$/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /\.module\.css$/,
      },
      {
        test: /\.(svg|png)/,
        type: 'asset',
      },
      // {
      //   test: /\.(svg|png)/,
      //   type: 'asset/resource',
      // },
      // {
      //   test: /\.svg/,
      //   type: 'asset/inline'
      // },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  // webpack-dev-server v4.0.0부터는 HMR이 default로 설정되어있다.
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  resolve: {
    alias: {
      styles: path.resolve('./src/styles/'),
      assets: path.resolve('./src/assets/'),
      // assets: path.resolve(__dirname, './src/assets/'),
    },
  },
};
