const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  devServer: {
    static: path.join(__dirname, 'dist'), // путь к вашей директории сборки
    compress: true,
    port: 8080,
    open: true,
  },
  entry: './src/index.js', // Ваш главный файл
  output: {
    filename: 'bundle.js', // Имя выходного файла
    path: path.resolve(__dirname, 'dist'), // Путь к выходной директории
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'img', // Путь к выходной директории изображений
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: ['svg-inline-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/main.css', // Имя файла для стилей
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html', // Путь к вашему HTML-файлу path.resolve(__dirname, 'index.html')
      filename: 'index.html', // Имя выходного HTML-файла
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: './src/img', to: 'img' }, // Копирование изображений из src/images в dist/images
      ],
    }),
  ],
};
