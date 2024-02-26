import React, { useState } from 'react';
import './App.css';
import ManageTasks from './components/ManageTasks';
import AllTasks from './components/AllTasks';




const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Task 1', isCompleted: false, priority: 1 , date: new Date() },
    { id: 2, text: 'Task 2', isCompleted: false, priority: 2 , date: new Date()},
    { id: 3, text: 'Task 3', isCompleted: false, priority: 3 ,date: new Date()}
  ]);

 const addTask = (newTaskText) => {
  const newId = tasks.length > 0 ? Math.max(...tasks.map(tasks => tasks.id)) + 1 : 1;
    setTasks([...tasks, {id:newId, text: newTaskText, isCompleted:false, priority: 1, date: new Date()}]);
    
  };
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(tasks => tasks.id !== taskId));
  };

  const markAsComplete = (taskId) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task));
  };

  const updateTask = (taskId, newText) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, text: newText } : task));
  };

  const handlePriorityChange = (taskId, newPriority) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, priority: newPriority } : task));
  };

  const sortTasks = (selectedOption) => {
    switch (selectedOption) {
      case 'alphabetical':
        setTasks([...tasks].sort((a, b) => a.text.localeCompare(b.text)));
        break;
      case 'priority':
        setTasks([...tasks].sort((a, b) => a.priority - b.priority));
        break;
      case 'date':
        setTasks([...tasks].sort((a, b) => a.date - b.date));
        break;
      case 'status':
        setTasks([...tasks].sort((a, b) => b.isCompleted - a.isCompleted));
        break;
      default:
        // No sorting or a default sort can be implemented here
        break;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Task Manager</p>
      </header>
      <ManageTasks 
      addTask={addTask} 
      tasks={tasks} 
      setTasks={setTasks} 
      sortTasks={sortTasks}
     />
     <AllTasks
      tasks={tasks}
      markAsCompleted={markAsComplete}
      deleteTask={deleteTask}
      updateTask={updateTask}
      handlePriorityChange={handlePriorityChange}
      />
    </div>
  );
};

export default App;