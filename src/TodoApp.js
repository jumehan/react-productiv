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
    setTodos(todos => todos.map(todo =>
      updatedTodo.id === todo.id ? updatedTodo : todo));
  }


  /** delete a todo by id */
  function remove(id) {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }

  return (
    <main className="TodoApp">
      <div className="row">

        <div className="col-md-6">
          {(!todos.length)
            ?
            <span className="text-muted">You have no todos.</span>
            :
            <EditableTodoList
              todos={todos}
              remove={remove}
              update={update} />}
        </div>

        <div className="col-md-6">
          <section className="mb-4">
            <h3>Top Todo</h3>
            {(todos.length)
              ?
              <TopTodo todos={todos} />
              :
              <span className="text-muted">You have no todos.</span>}
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