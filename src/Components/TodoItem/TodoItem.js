import React from 'react';
import './TodoItem.css';
import closeIcon from '../TodoItem/images/cerca.png';
import checkIcon from '../TodoItem/images/cheque.png';

function TodoItem(props) {

  

  return (
   
    <li className="TodoItem">
      <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} onClick={props.onComplete}>
      <img src={checkIcon} alt="" className='btncheck'/>
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`} >
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={props.onDelete}>
      <img src={closeIcon} alt="Eliminar Tarea" className="btndelete"/>
      

      </span>
      
    </li>
  
  );
}

export { TodoItem };