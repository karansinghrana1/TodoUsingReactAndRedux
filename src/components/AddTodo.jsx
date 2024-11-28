import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = React.useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div className="add-todo-container">
      <h1 className="header">Todo App Using Redux Toolkit</h1>
      <form onSubmit={addTodoHandler} className="todo-form">
        <input
          type="text"
          className="todo-input"
          placeholder="What needs to be done?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="add-button">
          Add
        </button>
      </form>
      <style jsx>{`
        .add-todo-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2rem;
          background-color: #000000; /* Updated background color to gray */
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          margin: 2rem auto;
          width: 90%;
          max-width: 600px;
          border-radius: 10px;
        }

        .header {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 1rem;
          color: #007bff;
        }

        .todo-form {
          display: flex;
          gap: 1rem;
          width: 100%;
        }

        .todo-input {
          flex-grow: 1;
          padding: 0.8rem;
          font-size: 1rem;
          border: 1px solid #ddd;
          border-radius: 5px;
          outline: none;
          transition: border-color 0.2s ease;
        }

        .todo-input:focus {
          border-color: #007bff;
        }

        .add-button {
          padding: 0.8rem 1.5rem;
          font-size: 1rem;
          color: white;
          background-color: #007bff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .add-button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
}

export default AddTodo;
