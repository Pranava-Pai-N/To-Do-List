import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ToDoForm from './ToDoForm';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/todos')
      .then(response => setTodos(response.data))
      .catch(error => console.error(error));
  }, []); 

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]); 
  };

  return (
    <div className="container">
      <h1>To Do App</h1>
      <ToDoForm onAdd={addTodo} /> 
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>{todo.task}</li> 
        ))}
      </ul>
    </div>
  );
};

export default App;
