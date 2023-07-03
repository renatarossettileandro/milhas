/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './App.css';
import './App.js';

export const Calc = (props) => {

  const [status, setStatus] = useState([]);
  const [data, setData] = useState([]);
  const [qtdadeMilhas, setqtdadeMilhas] = useState([]);
  const [valor, setValor] = useState([]);
  let [valorTotal, setValorTotal] = useState(0);
  let [qtdadeTotal, setQtdadeTotal] = useState(0);
  let [media, setMedia] = useState(0);


  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const entradaSaida = formData.get('status');
    const data = formData.get('data');
    const qtdadeMilhas = formData.get('qtdadeMilhas');
    const valor = formData.get('valor');
    const novoStatus = { entradaSaida, data, qtdadeMilhas, valor };

    setStatus((prev) => [entradaSaida, ...prev]);
    setData((prev) => [data, ...prev]);
    setqtdadeMilhas((prev) => [qtdadeMilhas, ...prev]);
    setValor((prev) => [valor, ...prev]);

    event.target.reset();
  };

  let somaArr = (arr) => {
    if (arr.length > 0) {
      let soma = 0;
      for (let i = 0; i < arr.length; i++) {
        soma = soma + parseFloat(arr[i]);
      }
      return soma;
    }
  };

  useEffect(() => {
    const valorTotal = somaArr(valor);
    const qtdadeTotal = somaArr(qtdadeMilhas);
    const novaMedia = (valorTotal / qtdadeTotal) * 1000;
  
    setValorTotal(valorTotal);
    setQtdadeTotal(qtdadeTotal);
    setMedia(novaMedia);
  }, [valor, qtdadeMilhas]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='status'>Entrada ou saída de milhas:</label>
        <input type='text' id='status' name='status' /><br />
        <label htmlFor='data'>Data:</label>
        <input type='text' id='data' name='data' /><br />
        <label htmlFor='qtdadeMilhas'>Quantas milhas:</label>
        <input type='number' id='qtdadeMilhas' name='qtdadeMilhas' /><br />
        <label htmlFor='valor'>Preço:</label>
        <input type='number' id='valor' name='valor' /><br />
        <input type='submit' id='submit' value='Cadastrar' className='formbutton' />
      </form>

       { isNaN(media) ?
          (<div>
             
          </div>
          ) : (
            <div>
              <h5>O valor médio do milheiro é: {media}</h5>
            </div>
          )
        }
    </div>
  );
};
  





