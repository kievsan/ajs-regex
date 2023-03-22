const path = require('path'); // Node.js стандартный модуль для разрешения путей файлов
// const webpack = require('webpack'); // для получения доступа к встроенным плагинам

const HtmlWebPackPlugin = require('html-webpack-plugin'); // устанавливается через npm
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // устанавливается через npm

module.exports = {
  entry: './src/index.js', // точка входа
  output: {
    path: path.resolve(__dirname, 'dist'), // каталог для результатов сборки (записывается в абсолютном формате, для этого исп.resolve(__dirname,)
    filename: 'main.js', // имя файла с результатами сборки
  },
  // mode: 'production',
  // mode: 'development',
  module: {
    rules: [ // правила загрузки модулей
      {
        test: /\.js$/,
        exclude: /node_modules/, // не нужно обрабатывать файлы из директории node_modules
        use: [{ loader: 'babel-loader' }], // загрузчик .js-файлов
      },
      {
        test: /\.html$/,
        use: [{ loader: 'html-loader' }],
      },
      {
        test: /\.css$/,
        use: [ //  запускаются в обратном порядке
          MiniCssExtractPlugin.loader,
          'css-loader', // сначала обработается этим згрузчиком
        ],
      },
      {
        test: /\.txt$/,
        use: 'raw-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: 'index.html', // если дать другое имя, то webpack-dev-server не сможет найти этот файл и даст ошибку "Cannot GET /"
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css',
    }),
  ],
};
