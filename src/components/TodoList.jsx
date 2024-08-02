import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";
const TodoList = ({ todos, setTodos }) => {
  return (
    <div className={styles.todolist}>
      {todos.map((item) => (
        <TodoItem key={item} item={item} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
};

export default TodoList;
