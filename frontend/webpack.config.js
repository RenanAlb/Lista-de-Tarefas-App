const path = require('path');

module.exports = {
  entry: 'main.jsx', // Arquivo de entrada principal
  output: {
    path: path.resolve(__dirname, 'dist'), // Diretório de saída para os arquivos gerados
    filename: 'index.html' // Nome do arquivo de saída
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      // Adicione outras regras de carregamento, se necessário
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Certifique-se de incluir .jsx como uma extensão resolvida
  },
};
