const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: {
    application: './app/javascript/packs/application.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public/packs'),
    publicPath: '/packs/',
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
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [],
  node: {
    __dirname: true,
    __filename: true,
    global: true,
  },
};



