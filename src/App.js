import React from 'react';
import { TodoProvider } from './Components/TodoContext/TodoContext';
import { AppUI } from './AppUI';
import './App.css';

function App() {
  return (
    <div className='container'>
    <TodoProvider>
      <h1>ADMINISTRADOR DE TAREAS</h1>
      <AppUI />
    </TodoProvider>
    </div>
  );
}

export default App;