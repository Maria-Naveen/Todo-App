import { useState } from "react";
import styles from "./todoitem.module.css";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { ImBookmark } from "react-icons/im";
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
            <ImBookmark className={styles.saveButton} onClick={handleSave} />
          ) : (
            <MdEdit className={styles.editButton} onClick={handleEdit} />
          )}

          <MdDelete
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          />
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
};

export default TodoItem;
