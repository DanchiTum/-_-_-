import './style.css';
import ToDoItemComponent from './todo-item';

const ToDoListComponent = ({ todos, setTodos, setEditingIndex }) => {
  return (
    <div className='todo-list'>
      {todos.map((todo, index) => (
        <ToDoItemComponent 
          key={index} 
          text={todo.text} 
          createdAt={todo.createdAt} 
          index={index} 
          setTodos={setTodos} 
          setEditingIndex={setEditingIndex}
        />
      ))}
    </div>
  );
};

export default ToDoListComponent;
