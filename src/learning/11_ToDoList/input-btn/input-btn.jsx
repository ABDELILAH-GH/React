import "./input-btn.css";
import React, { useState } from "react";

export default function InputBtn() {
  const [todo, setTodo] = useState();
  const [todoList, setTodoList] = useState([]);

  const handleInputName = () => {
    const todo = document.querySelector("#todo").value;
    setTodo(todo);
  };

  const handleClick = (e) => {
    setTodoList([...todoList, todo]); 
 
  };
  const handleDelete = (value) => {
    setTodo([...todoList.filter((item)=>item !== value)])
  }

  return (
    <>
      <div className="container">
        <input
          type="text"
          className="input"
          placeholder="Task Title"
          id="todo"
          value={todo} // Liaison entre l'input et l'état
          onChange={handleInputName} // Mise à jour de l'état lors de la saisie
        />

        <input
          type="button"
          value="Add"
          className="add"
          onClick={handleClick} // Ajout de la tâche
        />
      </div>
      <div className="task">
      <ul>
      {
         todoList.map((item,index)=>(
            <li key = {index} className="ul">
               {item}
               <button className="delete"
               onClick={()=>handleDelete(item)}
               >
                  X
               </button>

            </li>
         ))
      }
   </ul>
      </div>
    </>
  );
}
