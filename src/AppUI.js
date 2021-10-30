import React from 'react';
import { TodoCounter } from './Components/TodoCounter/TodoCounter';
import { TodoSearch } from './Components/TodoSearch/TodoSearch';
import { TodoList } from './Components/TodoList/TodoList';
import { TodoItem } from './Components/TodoItem/TodoItem';
import { CreateTodoButton } from './Components/CreateTodoButton/CreateTodoButton';
import { TodoContext} from './Components/TodoContext/TodoContext';
import { Modal } from './Components/Modal/Modal';
import { TodoForm} from './Components/TodoForm/TodoForm';

function AppUI() {
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
          {error && <p>Desespérate, hubo un error...</p>}
          {loading && <p>Estamos cargando, no desesperes...</p>}
          {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
          
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
            <TodoForm/>
          </Modal>
        )}
  
        <CreateTodoButton
          setOpenModal={setOpenModal}
        />
      </React.Fragment>
    );
  }
  
  export { AppUI };