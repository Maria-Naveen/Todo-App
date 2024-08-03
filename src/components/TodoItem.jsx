import styles from "./todoitem.module.css";
const TodoItem = ({ item, todos, setTodos }) => {
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

  const completed = item.done ? styles.completed : "";
  return (
    <div className={styles.todoitem}>
      <div className={styles.todoitemName}>
        <span className={completed} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
        <span>
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
