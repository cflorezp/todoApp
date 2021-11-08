import React from 'react';
import { TodoContext } from '../TodoContext/TodoContext';
import './TodoForm.css';

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState('');
  const [show, setShow] = React.useState(false);
  const { addTodo, setOpenModal } = React.useContext(TodoContext);
  
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
    setShow(false);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if(newTodoValue === ''){
      setShow(true);
    }else{
      setShow(false);
      addTodo(newTodoValue);
      setOpenModal(false);
    }
  };

  return (
    <div className="formContainer">
      <form onSubmit={onSubmit} className="myForm">
        <h2>Ingresa tu nueva tarea</h2>
        <textarea
          value={newTodoValue}
          onChange={onChange}
          placeholder="Nueva taerea aqui..."
          cols="30"
          rows="3"
        />
        <div>
          <button onClick={onCancel} type="button">
            Cancelar
          </button>
          <button type="submit">Añadir</button>
        </div>

        {show ? (<p style={{ display: 'block' }}>¡Por favor ingrese alguna tarea!</p>)
         : (<p style={{display: 'none' }}>¡Por favor ingrese alguna tarea!</p>)
        }


      </form>
    </div>
  );
}

export { TodoForm };
