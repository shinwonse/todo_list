const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    // 번들링된 파일의 이름
    filename: 'bundle.js',
    // __dirname => 현재 webpack.config.js 파일이 위치한 경로를 알려주는 node.js의 약속된 변수, 
    // './dist' => 번들링된 파일을 저장할 위치
    path: path.resolve(__dirname, './dist') 
  },
  devServer: {
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/, // test: 로더를 적용할 파일 유형 (일반적으로 정규식 사용)
        use: ['style-loader','css-loader'] // use: 해당 파일에 적용할 로더의 이름, 뒤쪽의 로더가 먼저 실행됨
        // 여기서는 css-loader를 통과하면서 css 파일을 자바스크립트 파일에 끼워넣고 style-loader를 통과하면서 html 파일에 스타일 태그를 끼워넣는다.
      },
      {
        test: /\.svg/,
        use: {
          loader: 'svg-url-loader',
          options: {
            iesafe: true,
          }
        }
      },
      {
        test: /\.png/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html')
    })
  ]
}