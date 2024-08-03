import { useState } from "react";
import styles from "./form.module.css";
const Form = ({ todos, setTodos }) => {
  const [todo, setTodo] = useState({ name: "", done: false });
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!todo.name.trim()) {
      setError("Please enter a todo item.");
      return;
    }

    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
    setError("");
  };
  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.todoContainer}>
        <input
          className={styles.inputText}
          type="text"
          value={todo.name}
          placeholder="Enter your todo..."
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
        />
        <button className={styles.submitBtn} type="submit">
          Add
        </button>
      </div>
      {error && <p className={styles.errorMessage}>{error}</p>}
    </form>
  );
};

export default Form;
