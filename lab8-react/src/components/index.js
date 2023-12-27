import React, { useState, useEffect } from 'react';
import './style.css';
import ToDoInputComponent from './todo-input';
import ToDoListComponent from './todo-list';

function App () {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos'))?.map(todo => ({ 
      ...todo, 
      createdAt: new Date(todo.createdAt) 
    })) || []
  );
  const [currentInput, setCurrentInput] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [filteredTodos, setFilteredTodos] = useState(todos);

  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);
  

  const handleSearchClick = () => {
    setFilteredTodos(todos.filter(todo => todo.text.includes(searchText)));
  };

  return (
    <div className="App">
      <ToDoInputComponent 
        currentInput={currentInput} 
        setCurrentInput={setCurrentInput} 
        todos={todos} 
        setTodos={setTodos} 
        editingIndex={editingIndex}
        setEditingIndex={setEditingIndex}
        searchText={searchText} 
        setSearchText={setSearchText}
        handleSearchClick={handleSearchClick}
      />
      <ToDoListComponent todos={filteredTodos} setTodos={setTodos} setEditingIndex={setEditingIndex} />
    </div>
  );
}

export default App;
