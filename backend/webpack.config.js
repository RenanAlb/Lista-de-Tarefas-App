const path = require('path');

module.exports = {
  entry: 'index.js', // Arquivo de entrada principal
  output: {
    path: path.resolve(__dirname, 'dist'), // Diretório de saída para os arquivos gerados
    filename: 'bundle.js' // Nome do arquivo de saída
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Aplica as regras apenas aos arquivos JS
        exclude: /node_modules/, // Exclui o diretório node_modules
        use: {
          loader: 'babel-loader', // Usa o Babel para transpilar o código
          options: {
            presets: ['@babel/preset-env'] // Conjunto de presets do Babel
          }
        }
      }
    ]
  }
};
