import React from "react";
import EditableTodo from "./EditableTodo";

/** Show list of editable todos.
 *
 * Props:
 * - todos: array of [ todo, ... ]
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * TodoApp -> EditableTodoList -> [ EditableTodo, ... ]
 */

function EditableTodoList({ todos, update, remove }) {
  return (
    <div>
      {todos.map(todo => (
        < EditableTodo
          key={todo.id}
          todo={todo}
          remove={remove}
          update={update}
        />
      ))}
    </div>
  );
}

export default EditableTodoList;
