// src/todoCounter/TodoCounter.jsx

import React from 'react';
import { TodoContext } from '../todoContext/TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  
  return (
    <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} Tareas</h2>
  );
}

export { TodoCounter };