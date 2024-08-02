import styles from "./todoitem.module.css";
const TodoItem = ({ item }) => {
  return (
    <div className={styles.todoitem}>
      <div className={styles.todoitemName}>
        {item}
        <span>
          <button className={styles.deleteButton}>X</button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
};

export default TodoItem;
