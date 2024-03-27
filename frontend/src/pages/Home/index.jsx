import { Tarefas, ButtonAddTarefa, Container, Header, Input, Tarefa, ButtonFunction, Div, NomeTarefa, Position, Blur, Top, ButtonReescreverTarefa, ReescreverTarefaInput } from "./styles"
import { MdOutlineDelete } from "react-icons/md"
import { FiEdit2 } from "react-icons/fi"
import { IoClose } from "react-icons/io5"
import { useState, useEffect } from "react"

const Home = () => {
  const [novaTarefa, setNovaTarefa] = useState({ tarefa: "" })
  const [tarefas, setTarefas] = useState([])
  const [alterar, setAlterar] = useState(false)
  const [reescrever, setReescrever] = useState('')
  const [id, setId] = useState('')

  console.log(id)

  const mostrarAtualizar = (id) => {
    setAlterar(!alterar)
    setId(id)
  }

  const removerTarefa = async (idTarefa) => {
    console.log(idTarefa)
    try {
      const response = await fetch(`http://localhost:8080/deletar-tarefa/${idTarefa}`, {
        method: 'DELETE'
      })

      if (!response.ok) {
        throw new Error('Erro ao excluir tarefa')
      }

      window.location.reload()
    } catch(error) {
      console.error('Erro ao conectar em http://localhost:8080/deletar-tarefa', error)
    }
  }

  const editarTarefa = async () => {
    try {
      const response = await fetch(`http://localhost:8080/atualizar-tarefa/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ reescrito: reescrever })
      })

      if (!response.ok) {
        throw new Error('Erro ao se conectar em http://localhost:8080/atualizar-tarefa')
      }

      console.log(response)

      window.location.reload()
    } catch(error) {
      console.error('Erro ao conectar em http://localhost:8080/atualizar-tarefa :', error)
    }
  }

  const editTarefa = () => {
    return(
      <Blur>
        <Position>
          <Top>
            <p>Alterar Tarefa</p>
            <button onClick={() => mostrarAtualizar()}>
              <IoClose size={25} />
            </button>
          </Top>
          <div className="dados">
            <ReescreverTarefaInput type="text" placeholder="Reescreva a tarefa" value={reescrever} onChange={(e) => setReescrever(e.target.value)} />
            <ButtonReescreverTarefa onClick={editarTarefa}>Confirmar</ButtonReescreverTarefa>
          </div>
        </Position>
      </Blur>
    )
  }

  const data = () => {
    const date = new Date();
    const hora = date.getHours();
    const minuto = date.getMinutes();
    const segundo = date.getSeconds();

    return `${hora < 10 ? '0' + hora : hora}:${minuto < 10 ? '0' + minuto : minuto}:${segundo < 10 ? '0' + segundo : segundo}`;
  };

  const fetchTarefas = async () => {
    try {
      const response = await fetch('http://localhost:8080/tarefas');
      if (!response.ok) {
        throw new Error('Erro ao obter tarefas');
      }
      const responseData = await response.json();
      setTarefas(responseData);
    } catch (error) {
      console.error('Erro ao obter tarefas: ', error);
    }
  }

  useEffect(() => {
    fetchTarefas();
  }, []);

  const handleChange = (e) => {
    setNovaTarefa({ ...novaTarefa, [e.target.name]: e.target.value });
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/home', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ tarefa: novaTarefa.tarefa, dataTarefa: data() })
      });

      if (!response.ok) {
        throw new Error('Erro ao criar tarefa');
      }

      fetchTarefas();
      setNovaTarefa({ tarefa: "" }); // Limpa o campo de input após adicionar a tarefa
    } catch (error) {
      console.error('Erro ao criar tarefa: ', error);
    }
  };

  return (
    <Container>
      <Header onSubmit={handleClick}>
        <Input
          placeholder="Escreva uma tarefa"
          onChange={handleChange}
          value={novaTarefa.tarefa}
          name="tarefa"
        />
        <ButtonAddTarefa type="submit">Adicionar tarefa</ButtonAddTarefa>
      </Header>
      <Tarefas>
        {tarefas.map((tarefa, index) => (
          <Tarefa key={index}>
            <p className="data">{tarefa.dataTarefa}</p>
            <NomeTarefa>{tarefa.tarefa}</NomeTarefa>
            <Div>
              <abbr title="Deletar tarefa">
                <ButtonFunction onClick={() => removerTarefa(tarefa._id)}>
                  <MdOutlineDelete size={20} />
                </ButtonFunction>
              </abbr>
              <abbr title="Editar tarefa">
                <ButtonFunction onClick={() => mostrarAtualizar(tarefa._id)}>
                  <FiEdit2 size={20} />
                </ButtonFunction>
              </abbr>
            </Div>
          </Tarefa>
        ))}
      </Tarefas>
      {alterar === true ? editTarefa() : ''}
    </Container>
  );
};

export default Home;