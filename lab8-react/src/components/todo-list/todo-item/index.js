import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';
import './style.css';

/**
 * 
 * @param {Object} props 
 * @param {string} props.text
 * @param {Date} props.createdAt
 * @returns 
 */
const ToDoItemComponent = ({ text = "Text of todo item", createdAt, index, setTodos, setEditingIndex }) => {

 const handleDeleteClick = () => {
    setTodos(prevTodos => prevTodos.filter((todo, i) => i !== index));
  };

 const handleEditClick = () => {
  setEditingIndex(index);
 };

 const date = (createdAt || new Date()).toDateString();

 return (
  <div className='todo-item'>
   <div>
    <input class="form-check-input" type="checkbox" value="option1" />
    <label class="form-check-label" for="inlineCheckbox1"></label>
    <span class="todo-text">{text}</span>
   </div>
   <span class="todo-text">{date}</span>
   <span class="span-button" onClick={handleDeleteClick}>
    <FontAwesomeIcon icon={faTrash} />
   </span>
   <span class="span-button" onClick={handleEditClick}>
    <FontAwesomeIcon icon={faPen} />
   </span>
  </div>
 );
};

export default ToDoItemComponent;
