const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/', // Importante para o roteamento funcionar corretamente
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Suporte a arquivos .js e .jsx
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'], // Adicionei o preset-env para suporte a ES6+
          },
        },
      },
      {
        test: /\.css$/, // Suporte a arquivos CSS
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg|ico)$/, // Suporte a imagens e ícones
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/images', // Aloca os arquivos em uma pasta de imagens
          },
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/, // Suporte a fontes
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Gera o arquivo HTML com base no template
      favicon: './public/favicon.ico', // Adiciona suporte para favicon
    }),
  ],
  devServer: {
    historyApiFallback: true, // Suporte para React Router (SPA)
    static: path.join(__dirname, 'public'), // Servir arquivos estáticos da pasta public
    port: 8080, // Porta do servidor
    open: true, // Abre automaticamente o navegador
  },
};
