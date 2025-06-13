import { useSelector, useDispatch } from "react-redux";
import Addform from "./addform";
import { deletetodo, markasdone } from "../features/todoslice";


export default function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const clickhandler = (id) => {
    dispatch(deletetodo(id));
  };

  const Markasdone = (id) => {
    dispatch(markasdone(id));
  };

  return (
    <div className="todo-container">
      <h2>Todo List App</h2>
      <Addform />

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <span
              className={`todo-text ${todo.isDone ? "done" : ""}`}
            >
              {todo.task}
            </span>
            <div className="todo-buttons">
              <button onClick={() => clickhandler(todo.id)}>Delete</button>
              <button onClick={() => Markasdone(todo.id)}>
                {todo.isDone ? "Undo" : "Mark as Done"}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}