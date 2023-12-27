import React from 'react';
import './style.css';

const ToDoInputComponent = ({ currentInput, setCurrentInput, todos, setTodos, editingIndex, setEditingIndex, searchText, setSearchText, handleSearchClick }) => {
  const handleInputChange = (event) => {
    setCurrentInput(event.target.value);
  };

  const handleAddClick = () => {
    if (editingIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editingIndex].text = currentInput;
      setTodos(updatedTodos);
      setEditingIndex(null);
    } else {
      const newTodo = {
        text: currentInput,
        createdAt: new Date(),
      };
      setTodos([...todos, newTodo]);
    }
    setCurrentInput('');
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleClearSearch = () => {
    setSearchText('');
  };

  return (
    <div className='todo-input'>
      <input 
        type="text" 
        placeholder="Add item..." 
        value={currentInput} 
        onChange={handleInputChange} 
      />
      <button type="button" class="add" onClick={handleAddClick}>
        {editingIndex !== null ? 'Update' : 'Add'}
      </button>
      <div id="search">
        <input type="text" placeholder="Search" value={searchText} onChange={handleSearchChange} />
        <span onClick={handleClearSearch}>X</span>
      </div>
      <button type="button" onClick={handleSearchClick}>Search</button>
    </div>
  );
};

export default ToDoInputComponent;
