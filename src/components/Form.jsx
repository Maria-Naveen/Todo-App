import { useState } from "react";
import styles from "./form.module.css";
const Form = ({ todos, setTodos }) => {
  const [todo, setTodo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  };
  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.todoContainer}>
        <input
          className={styles.inputText}
          type="text"
          value={todo}
          placeholder="Enter your todo..."
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className={styles.submitBtn} type="submit">
          Add
        </button>
      </div>
    </form>
  );
};

export default Form;
