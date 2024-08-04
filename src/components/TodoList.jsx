import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";
const TodoList = ({ todos, setTodos }) => {
  const sortedTodos = todos.slice().sort((a, b) => a.done - b.done);
  return (
    <div className={styles.todolist}>
      {sortedTodos.map((item) => (
        <TodoItem
          key={item.name}
          item={item}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
