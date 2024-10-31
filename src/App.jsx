import React from 'react';
import { TodoContext } from './todoContext/TodoContext';
import { TodoCounter } from './todoCounter/TodoCounter';
import { TodoSearch } from './todoSearch/TodoSearch';
import { TodoList } from './todoList/TodoList';
import { TodoItem } from './todoItem/TodoItem';
import { TodosError } from './todosError/TodosError';
import { TodosLoading } from './todosLoading/TodosLoading';
import { EmptyTodos } from './emptyTodos/EmptyTodos';
import { TodoForm } from './todoForm/TodoForm';
import { CreateTodoButton } from './createTodoButton/CreateTodoButton';
import Modal from './modal/Modal';

function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
 
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <TodosError />}
        {loading && <TodosLoading />}
        {(!loading && !searchedTodos.length) && <EmptyTodos />}

        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}

export default App;

