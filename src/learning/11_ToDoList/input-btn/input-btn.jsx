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
    if (todo.trim() === "") return; // Vérification pour éviter les tâches vides
    setTodoList([...todoList, todo]); 
    setTodo(""); 
  };
  // const handleDelete = (value) => {
  //   setTodo([...todo.filter((item)=>item !== value)])
  // }

  return (
    <>
      <div className="container">
        <input
          type="text"
          className="input"
          placeholder="Task Title"
          id="todo"
          value={todo}
          onChange={handleInputName}
        />

        <input
          type="button"
          value="add"
          className="add"
          onClick={() => handleClick}
        />
      </div>

      <div className="task">
        <ul>
          {todoList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
