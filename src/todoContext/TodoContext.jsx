import React from 'react';
import PropTypes from 'prop-types'; 
import { useLocalStorage } from '../todoContext/UseLocalStoraje'; // Asegúrate de que este hook esté implementado correctamente

const TodoContext = React.createContext();

function TodoProvider(props) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);
  
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  // Cálculo de los totales
  const completedTodos = todos.filter(todo => todo.completed).length; // No es necesario el doble negado
  const totalTodos = todos.length;

  // Filtrado de todos según la búsqueda
  const searchedTodos = searchValue.length === 0
    ? todos
    : todos.filter(todo => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
      });

  // Funciones para gestionar todos
  const addTodo = (text) => {
    const newTodos = [...todos, { completed: false, text }];
    saveTodos(newTodos);
  };

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    if (todoIndex > -1) { // Verificamos si el índice es válido
      const newTodos = [...todos];
      newTodos[todoIndex].completed = true;
      saveTodos(newTodos);
    }
  };

  const deleteTodo = (text) => {
    const newTodos = todos.filter(todo => todo.text !== text); // Filtramos en lugar de mutar
    saveTodos(newTodos);
  };

  return (
    <TodoContext.Provider value={{
      loading,
      error,
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      addTodo,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
    }}>
      {props.children}
    </TodoContext.Provider>
  );
}

// Agrega la validación de PropTypes
TodoProvider.propTypes = {
  children: PropTypes.node.isRequired, // Valida que 'children' sea un nodo de React
};

export { TodoContext, TodoProvider };
