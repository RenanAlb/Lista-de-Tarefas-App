const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()

// Configurações
app.use(cors())
app.use(express.json())

// MongoDB
const connectToDataBase = require('./src/database/connect')
connectToDataBase()

const DadosModel = require('./src/models/dados.model')

// Rotas
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Servidor ativo ${port}`,))

app.get('/', (req, res) => {
  res.status(200).send('Hello')
})

app.post('/home', async (req, res) => {
  try {
    const { tarefa, dataTarefa } = req.body
    console.log(tarefa, dataTarefa)

    const novaTarefa = new DadosModel({
      tarefa: tarefa,
      dataTarefa: dataTarefa
    })

    await novaTarefa.save()

    res.status(201).json({ message: 'Tarefa adicionada com sucesso!' })
  } catch(error) {
    console.error('Erro ao adicionar as tarefas ao banco de dados: ', error)
    res.status(500).json({ message: 'Erro ao adicionar a tarefa ao banco de dados' })
  }
})

app.get('/tarefas', async (req, res) => {
  try {
    const dados = await DadosModel.find()
    console.log(dados)
    res.status(200).json(dados)
  } catch(error) {
    console.error('Erro ao pegar as tarefas ', error)
    res.status(500).json({ message: "Erro ao pegar as tarefas" })
  }
})

app.delete('/deletar-tarefa/:id', async (req, res) => {
  try {
    const idTarefa = req.params.id
    const tarefaDelete = await DadosModel.findByIdAndDelete(idTarefa)

    if (!tarefaDelete) {
      return res.status(404).json({ message: 'Tarefa não encontrada' })
    }

    res.status(200).json({ message: 'Tarefa excluída com sucesso' });
  } catch(error) {
    console.error('Erro ao excluir tarefa:', error)
    res.status(500).json({ message: 'Erro ao excluir tarefa' })
  }
})

app.patch('/atualizar-tarefa/:id', async (req, res) => {
  try {
    const tarefaId = req.params.id
    const { reescrito } = req.body
    console.log(reescrito)
    const tarefaAtualiza = await DadosModel.findByIdAndUpdate(tarefaId, { tarefa: reescrito }, { new: true })

    console.log('tarefa atualizada :', tarefaAtualiza)

    res.status(200).json({ message: 'Tarefa editada com sucesso' });
  } catch(error) {
    console.error('Erro ao editar tarefa', error)
    res.status(500).json({ message: 'Erro ao excluir tarefa' })
  }
})