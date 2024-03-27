import styled from "styled-components";

export const Container = styled.main`
  padding: 20px;
  width: calc(100% - 80px);
  min-height: calc(100vh - 80px);
  background-color: #101010;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
`

export const Header = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

export const ButtonAddTarefa = styled.button`
  background-color: #f5f5f5;
  padding: 13px;
  border: none;
  border-radius: 10px;
  transition: 0.4s;
  font-size: 1em;
  margin-left: 2px;

  @media screen and (max-width: 550px) {
    width: 100%;
    padding: 15px;
    margin: 0;
    transition: 0.4s;
  }

  &:hover {
    cursor: pointer;
    background-color: #d2d2d2;
    transition: 0.4s;
  }
`

export const Input = styled.input`
  width: 50%;
  padding: 13px;
  border-radius: 10px;
  outline: none;
  border: none;
  font-size: 1em;
  background-color: #f2f2f2;
  transition: 0.4s;

  @media screen and (max-width: 550px) {
    width: 100%;
    margin-bottom: 2px;
    transition: 0.4s;
  }
`

export const Tarefas = styled.section`
  width: 100%;
  min-height: 100%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

export const Tarefa = styled.div`
  background-color: #adadfe;
  padding: 10px;
  border-radius: 10px;
  max-width: 320px;
  transition: 0.2s;
  margin: 15px 15px 15px 0px;
  word-wrap: break-word;

  & .data {
    margin-top: -28px;
    font-size: 0.85em;
    margin-left: -10px;
    margin-bottom: 10px;
    color: gray;
  }
`

export const NomeTarefa = styled.p`
  color: black;
`

export const Div = styled.div`
  margin-top: 20px;
  justify-content: end;
  align-items: end;
  display: flex;
`

export const ButtonFunction = styled.button`
  padding: 5px;
  border: none;
  margin: 1px;
  border-radius: 10px;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    background-color: #d0d0d0;
    transition: 0.2s;
  }
`

export const Position = styled.div`
  animation: zooom 0.35s ease-in-out;

  @keyframes zooom {
    0% {
      opacity: 0;
      width: 20%;
      height: 100px;
    } 100% {
      opacity: 1;
      width: 80%;
      height: 400px;
    }
  }

  width: 80%;
  height: 400px;
  background-color: white;
  padding: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 10px;
  z-index: 1;
  transform: translate(-50%, -50%);

  & .dados {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    margin-top: 100px;
  }
`

export const Blur = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 50%;
  z-index: 1;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0,0,0,0.3);
  backdrop-filter: blur(6px);
`

export const Top = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;

  & p {
    font-size: 1.5em;
  }

  & button {
    border: none;
    background-color: transparent;
  }

  & button:hover {
    cursor: pointer;
    border: none;
    background-color: transparent;
  }
`

export const ReescreverTarefaInput = styled.input`
  width: calc(100% - 23px);
  padding: 13px 10px;
  border-radius: 10px;
  outline: none;
  border: none;
  font-size: 1em;
  background-color: #fff;
  transition: 0.4s;
  margin-bottom: 10px;
  border: 1px solid #d9d9f9;
`

export const ButtonReescreverTarefa = styled.button`
  background-color: black;
  padding: 13px;
  border: none;
  border-radius: 10px;
  transition: 0.4s;
  font-size: 1em;
  margin-left: 2px;
  color: white;

  &:hover {
    cursor: pointer;
    background-color: #3c3c3c;
    transition: 0.4s;
    color: white;
  }
`