// Refactored AllTasks component
import React, { useState } from 'react';
import setNewPriority from './ManageTasks';
const AllTasks = ({ tasks, markAsComplete, deleteTask, updateTask, priority, setTasks }) => {
  const [editTaskId, setEditTaskId] = useState(null);
  const [newText, setNewText] = useState('');
  
  const handleEditChange = (event) => {
    setNewText(event.target.value);
  };
  
  const submitEdit = (taskId) => {
    setNewPriority(taskId, newText);
    updateTask(taskId, newText);
    setEditTaskId(null);
    setNewText('');
  };
  
  const handleMarkAsComplete = (taskId) => {
    markAsComplete(taskId);
  };
  
  return (
    <div>
      <ul>
        {tasks.map(task => (
          <li key={task.id} style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}>
            {editTaskId === task.id ? (
              <input type="text" value={newText} onChange={handleEditChange} />
            ) : (
              <span>{task.text}</span>
            )}
            <button onClick={() => handleMarkAsComplete(task.id)}>Complete</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
            {editTaskId === task.id ? (
              <button onClick={() => submitEdit(task.id)}>Submit Edit</button>
            ) : (
              <button onClick={() => { setEditTaskId(task.id); setNewText(task.text); }}>Edit</button>
            )} 
          </li>
        ))}
      </ul>
    </div>
  );
};
export default AllTasks;