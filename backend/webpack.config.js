const path = require('path');

module.exports = {
  entry: 'index.js', // Arquivo de entrada principal
  output: {
    path: path.resolve(__dirname, 'dist'), // Diretório de saída para os arquivos gerados
    filename: 'bundle.js' // Nome do arquivo de saída
  },
};
