const mongoose = require('mongoose')

const connectToDataBase = async () => {
  try {
    mongoose.connect(`mongodb+srv://renanalbuquerque2501:xdvFAtYTRnE8JBdZ@cluster0.94olaif.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)

    console.log('Banco de dados conectado com sucesso!')
  } catch(error) {
    console.log('Erro ao conectar ao banco de dados', error.message)
  }
}

module.exports = connectToDataBase