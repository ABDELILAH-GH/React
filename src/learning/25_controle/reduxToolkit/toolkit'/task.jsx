import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { supprimer, terminer } from './slice'
export default function Task() {
   const tasks = useSelector((state) => state.tasks.tasks)
   const dispatch = useDispatch()
  return (
    <div  className='container w-50 mt-3'>
          <h3>ToDoList</h3>
          <div
            class="table-responsive"
          >
            <table
               class="table table-primary"
            >
               <thead>
                  <tr>
                     <th scope="col">ID</th>
                     <th scope="col">Label</th>
                     <th scope="col">Terminer??</th>
                     <th scope="col"></th>
                     <th scope="col"></th>
                  </tr>
               </thead>
               <tbody>
                  {
                     tasks.map((task) => (
                        <tr key={task.id}>
                           <td>{task.id}</td>
                           <td className={task.isComplet ? 'text-decoration-line-through':''}>{task.label}</td>
                           <td>{task.isComplet ? "OUI" : "NON"}</td>
                           <td>
                              <button
                                 type="submit"
                                 class={`btn ${task.isComplet ? 'btn-info' : 'btn-success'}`}
                                 onClick={()=> dispatch(terminer(task.id))}
                              >
                            {task.isComplet ? 'En cours' : 'Terminer'}
                              </button>
                           </td>
                           <td>
                              <button
                                 type="submit"
                                 class="btn btn-danger"
                                 onClick={() => dispatch(supprimer(task.id))}
                              >
                                 Supprimer
                              </button>
                              
                           </td>
                        </tr>
                     ))
                  }

               </tbody>
            </table>
          </div>
          
    </div>
  )
}
