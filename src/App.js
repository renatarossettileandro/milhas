import React, { useState } from 'react';
import { Calc } from './livelo.js';
import './App.css';

function App() {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(true);
  };

  return (
    <div className="App">
      <header className='App-header'>
        <h1>Calculo média de milhas</h1>
        <h3>Em qual das empresas você quer calcular o valor da sua milha?</h3>
        <div className='flex'>
          <button className='empresa_botao' onClick={handleClick}>Livelo</button>
          <button className='empresa_botao' onClick={handleClick}>Smile</button>
        </div>
        {showForm && <Calc />}
      </header>
    </div>
  );
}

export default App;
