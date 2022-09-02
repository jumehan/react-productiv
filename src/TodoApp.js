import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import TopTodo from "./TopTodo";
import EditableTodoList from "./EditableTodoList";
import TodoForm from "./TodoForm";

/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ todo, ... ]
 *
 * State:
 * - todos: array of [ todo, ... ]
 *
 * App -> TodoApp -> { TodoForm, EditableTodoList }
 */

function TodoApp({ initialTodos = [] }) {
  // todos = [ todo, ... ]
  const [todos, setTodos] = useState(initialTodos);

  /** add a new todo to list */
  function create(newTodo) {
    let todo = { ...newTodo, id: uuid() };
    setTodos(todos => [...todos, todo]);
  }

  /** update a todo with updatedTodo */
  function update(updatedTodo) {
    const { title, priority, id, description } = updatedTodo;

    setTodos(todos => todos.map((todo, i) => i === id ?
      {
        title: title,
        description: description,
        priority: priority
      } : todo));
  }


/** delete a todo by id */
function remove(id) {

  setTodos(todos => todos.filter(todo => todo.id !== id));
}

// /**contains todo list */
// function evaluateTodos(){
//   if (todos.length === 0){
//     return true;
//   }
//   return false;
// }


return (
  <main className="TodoApp">
    <div className="row">

      <div className="col-md-6">
        { todos.length &&
        <EditableTodoList
          todos={todos}
          remove={remove}
          update={update}
        />}

      {!todos.length && <span className="text-muted">You have no todos.</span>
      }
      </div>

      <div className="col-md-6">
        (if no top todo, omit this whole section)
        <section className="mb-4">
          <h3>Top Todo</h3>
          <TopTodo />
        </section>

        <section>
          <h3 className="mb-3">Add Nü</h3>
          <TodoForm
            initialFormData={{
              title: "",
              description: "",
              priority: 1,
            }}
            handleSave={create}
          />
        </section>
      </div>

    </div>
  </main>
);
}

export default TodoApp;