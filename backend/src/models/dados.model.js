const mongoose = require('mongoose')

const dadosSchema = new mongoose.Schema({
  tarefa: {
    type: String,
    required: true
  },
  dataTarefa: {
    type: String,
    required: true
  }
})

const DadosModel = mongoose.model('Dados', dadosSchema)

module.exports = DadosModel