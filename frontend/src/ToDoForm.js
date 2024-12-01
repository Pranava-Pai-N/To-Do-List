import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const TodoForm = ({ onAdd }) => {
  const [task, setTask] = useState('');

  const addTodo = async () => {
    if (task.trim()) {
      try {
        const response = await axios.post('http://localhost:3000/todos', { task });
        onAdd(response.data);  
        setTask('');  
      } catch (error) {
        console.error('Error adding todo:', error);
      }
    } else {
      alert('Please enter a valid task');
    }
  };

  return (
    <div className='place'>
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Add a New Task"
      />
      <button className='btnclick' onClick={addTodo}>Click to Add Task</button>
    </div>
  );
};

export default TodoForm;
