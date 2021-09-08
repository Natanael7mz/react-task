import React, { useState, useEffect } from 'react';
import Task from './Task';
import Form from './Form';

import style from '../modules/Main.module.css';

export default function Main() {
  const [tarefa, setTarefa] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    const taref = JSON.parse(localStorage.getItem('tarefa'));

    if (!taref) return;
    setTarefa(taref);
  }, []);

  useEffect(() => {
    const salvar = tarefa;

    localStorage.setItem('tarefa', JSON.stringify(salvar));
  }, [tarefa]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const tarefas = tarefa;
    const indexx = index;
    let novasTarefas = novaTarefa;
    novasTarefas = novasTarefas.trim();
    let erro = false;
    if (tarefas.indexOf(novasTarefas) !== -1 || novasTarefas.length === 0) {
      alert('Nao  Permitido Campo Vazio');
      erro = true;
      return;
    }
    if (erro) return;

    const novasT = [...tarefa];
    if (indexx === -1) {
      setTarefa([...novasT, novasTarefas]);

      setNovaTarefa('');
    } else {
      novasT[indexx] = novasTarefas;
      setTarefa([...novasT]);
      setIndex(-1);
    }
  };

  const handleEdit = (e, indece) => {
    const tarefas = tarefa;
    setNovaTarefa(tarefas[indece]);
  };

  const handleDel = (e, indece) => {
    const tarefas = tarefa;
    const novasTarefas = [...tarefas];
    novasTarefas.splice(indece, 1);

    setTarefa([...novasTarefas]);
    setNovaTarefa('');
  };
  return (
    <div className={style.main}>
      <div className={style.box1}>
        <div className={style.box2} />
      </div>

      <div className={style.box}>
        <h1>TASK</h1>

      </div>
      <Form
        novaTarefa={novaTarefa}
        setNovaTarefa={setNovaTarefa}
        handleSubmit={handleSubmit}
      />

      <Task
        tarefa={tarefa}
        handleEdit={handleEdit}
        handleDel={handleDel}

      />

    </div>
  );
}
