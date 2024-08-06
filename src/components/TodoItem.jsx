import { useState } from "react";
import styles from "./todoitem.module.css";
const TodoItem = ({ item, todos, setTodos }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(item.name);
  const handleDelete = (item) => {
    console.log("Delete button clicked for item", item);
    setTodos(todos.filter((todo) => todo !== item));
  };

  const handleClick = (itemName) => {
    console.log(`${itemName} clicked!`);
    const newTodos = todos.map((todo) =>
      todo.name === itemName ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newTodos);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleSave = () => {
    const newTodos = todos.map((todo) =>
      todo === item ? { ...todo, name: newName } : todo
    );

    setTodos(newTodos);
    setIsEditing(false);
  };
  const completed = item.done ? styles.completed : "";
  return (
    <div className={styles.todoitem}>
      <div className={styles.todoitemName}>
        {isEditing ? (
          <input
            className={styles.editInput}
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        ) : (
          <span className={completed} onClick={() => handleClick(item.name)}>
            {item.name}
          </span>
        )}

        <span>
          {isEditing ? (
            <button className={styles.saveButton} onClick={handleSave}>
              Save
            </button>
          ) : (
            <button className={styles.editButton} onClick={handleEdit}>
              Edit
            </button>
          )}
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            X
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
};

export default TodoItem;
