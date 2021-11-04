import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
  const onClickButton = () => {
    props.setOpenModal(prevState => ! prevState);
  };
  
  return (
    /*
    <button
      className="CreateTodoButton" 
      onClick={onClickButton}
    >+
    </button>*/

  <a href="#" className="button" onClick={onClickButton}><span>✓</span>Nueva Tarea</a>
  );
}

export { CreateTodoButton };
