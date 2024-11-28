import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="todos-container">
      <h2 className="subheader">Your Todos</h2>
      {todos.length === 0 ? (
        <p className="empty-message">No todos yet. Add one above!</p>
      ) : (
        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id} className="todo-item">
              <span className="todo-text">{todo.text}</span>
              <button
                className="delete-button"
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
      <style jsx>{`
        .todos-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2rem;
          width: 90%;
          max-width: 600px;
          margin: 0 auto 2rem;
          background-color: #f5f5f5; /* Updated background color to gray */
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          border-radius: 10px;
        }

        .subheader {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
          color: #333;
        }

        .empty-message {
          color: #777;
          font-size: 1rem;
        }

        .todo-list {
          width: 100%;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .todo-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.8rem 1rem;
          background-color: #e0e0e0; /* Lighter gray for each todo item */
          border: 1px solid #ddd;
          border-radius: 5px;
          margin-bottom: 0.8rem;
          transition: background-color 0.2s ease, box-shadow 0.2s ease;
        }

        .todo-item:hover {
          background-color: #d6d6d6;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        .todo-text {
          font-size: 1rem;
        }

        .delete-button {
          padding: 0.5rem 1rem;
          font-size: 0.9rem;
          color: white;
          background-color: #dc3545;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .delete-button:hover {
          background-color: #a71d2a;
        }
      `}</style>
    </div>
  );
}

export default Todos;
