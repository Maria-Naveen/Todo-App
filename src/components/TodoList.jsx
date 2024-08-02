import TodoItem from "./TodoItem";
const TodoList = ({ todos }) => {
  return todos.map((item) => <TodoItem key={item} item={item} />);
};

export default TodoList;
