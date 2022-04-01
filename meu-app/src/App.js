import React, { useState } from 'react';

import "./app.css";

const App = () => {
  //Esta variávl abaixo é a responsável por atualizar o state e mostrar o return
  const [tasks, setTasks] = useState([
      {
        id: '1',
        title: 'Estudando programação',
        completed: false,
        
      },
      {
        id: '2',
        title: 'Ler Livro JS',
        completed: true,
        
      },
      {
        id: '3',
        title: 'Fazer exercicios',
        completed: true,
        
      },
      {
        id: '4',
        title: 'Praticar',
        completed: false,
        
      },







  ]);

  return(
    <div>
      <div className="container" ></div>
          
    </div>
      
  );
};
export default App;