import styles from "./todoitem.module.css";
const TodoItem = ({ item, todos, setTodos }) => {
  const handleDelete = (item) => {
    console.log("Delete button clicked for item", item);
    setTodos(todos.filter((todo) => todo !== item));
  };
  return (
    <div className={styles.todoitem}>
      <div className={styles.todoitemName}>
        {item}
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
