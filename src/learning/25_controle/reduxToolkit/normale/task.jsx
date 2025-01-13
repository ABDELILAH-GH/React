import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { terminer, supprimer } from "./actions";
export default function Task() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  return (
    <div className="container w-50 mt-3">
      <h3>ToDoList</h3>
      <div class="table-responsive">
        <table class="table ">
          <thead className="table-primary">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Label</th>
              <th scope="col">Terminer ?</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td className={task.isComplet?'text-decoration-line-through':''}>{task.label}</td>
                <td>{task.isComplet ? "OUI" : "NON"}</td>
                <td>
                  <button
                    type="submit"
                    class={`btn ${task.isComplet ? "btn-info": "btn-success"}`}
                  
                    onClick={() => dispatch(terminer(task.id))}
                  >
                    {task.isComplet ? "En cours" : "Terminere"}
                  </button>
                  <button
                    type="submit"
                    class="btn btn-danger ms-3"
                    onClick={() => dispatch(supprimer(task.id))}
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
